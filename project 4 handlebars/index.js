const express = require("express"); //import
const path = require("path");
const cookie = require("cookie-parser")
const  connectDB = require('./config/dbConnect');
const { registerhandler, loginhandler, deleteHandler } = require("./controllers/userController");
const bodyParser = require("body-parser");
const isAuthenticated = require("./authorization/auth");


const port = 3000;

const app = express();

connectDB()


//middle wares
app.use(bodyParser.urlencoded({extended : false}))  // relevant for post methods
app.use(express.json())       //parsing  json data 
app.use(express.static(path.join(__dirname, "public")));   // serving static files 
app.use(cookie())
app.set('view engine', 'hbs');



// rendering is on server side      SSR

app.get("/", (req, res) => {res.render('index')});
app.get("/register", (req, res) => {res.render('register')});
app.get("/login", (req, res) => {res.render('login')});
app.get("/secureindex", isAuthenticated,  (req, res) => {res.render('secureHome')});




app.post("/register", registerhandler)
app.post("/login", loginhandler)
app.delete('/user/del' , deleteHandler)





app.listen(port, () => {
  console.log(`server started on  ${port}`);
});
