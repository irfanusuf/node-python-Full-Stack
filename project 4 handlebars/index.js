const express = require("express"); //import
const path = require("path");
const cookie = require("cookie-parser");
const xhbs = require("express-handlebars")
const connectDB = require("./config/dbConnect");
const {
  registerhandler,
  loginhandler,
  deleteHandler,
} = require("./controllers/userController");
const bodyParser = require("body-parser");
const isAuthenticated = require("./authorization/auth");

// crud operation on Book Model
const {createBook ,getAllBooks, editBook, deleteBook} = require("./controllers/itemController");

const multMid = require("./middlewares/multMid");

const port = 3000;
const app = express();



app.engine("hbs" , xhbs.engine({
  extname: "hbs",     // engine
  defaultLayout: "layout",   // layout is the main page 
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views" , "partials"),
}))




app.set("view engine", "hbs");
app.set("views" , path.join(__dirname , "views" , "pages"))




connectDB();

//middle wares
app.use(bodyParser.urlencoded({ extended: false })); // relevant for post methods
app.use(express.json()); //parsing  json data
app.use(express.static(path.join(__dirname, "public"))); // serving static files
app.use(cookie());

// rendering is on server side      SSR

app.get("/", (req, res) => { res.render("index" , {pageTitle : "BookStore"});});
app.get("/register", (req, res) => {res.render("register" ,  {pageTitle : "BookStore | Register"});});
app.get("/login", (req, res) => {res.render("login" , {pageTitle : "BookStore | Login"});});


app.get("/secureindex", isAuthenticated, getAllBooks);

app.get("/user/login", (req, res) => {res.render("userLogin" ,{pageTitle : "BookStore | User  | Login "});});




// user Routes
app.post("/register", registerhandler);
app.post("/login", loginhandler);
app.delete("/user/del", deleteHandler);






// item Routes
app.post("/book/add",multMid, createBook);

app.post("/book/edit/:id" , multMid ,  editBook)

app.get("/book/delete/:id" , deleteBook)


app.listen(port, () => {
  console.log(`server started on  ${port}`);
});
