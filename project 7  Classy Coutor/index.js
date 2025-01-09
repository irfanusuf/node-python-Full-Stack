const express = require("express");
const path = require("path");
const connectDB = require("./mongoDB/connectDB");
const {
  RegisterController,
  LoginController,
  DeleteController,
} = require("./controllers/usercontroller");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const isAuthenticated = require("./authorization/auth");
const exhbs = require("express-handlebars");
const multimid = require("./middleswares/multiMid");
const {createArticle , getArticles , editArticle , deleteArticle} = require("./controllers/itemcontroller");
const { getHomePage, getSingleArticle, getWinterPage, getProductPage } = require("./controllers/getControllers");

const port = 4001;

const app = express();

connectDB();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookie());

app.engine(
  "hbs",
  exhbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);

app.set("view engine", "hbs");
app.set('views' , path.join(__dirname , "views" , "pages"))





app.get("/", getHomePage);
app.get("/Winter-Wear",(req,res)=>{getProductPage(req,res,"Winter")})
app.get("/Western-Wear",(req,res)=>{getProductPage(req,res,"Western-Wear")})
app.get("/Ethnic-Wear",(req,res)=>{getProductPage(req,res,"Ethnic-Wear")})
app.get("/FootWear",(req,res)=>{getProductPage(req,res,"FootWear")})
app.get("/Accessories",(req,res)=>{getProductPage(req,res,"Accessories")})
app.get("/HandBags",(req,res)=>{getProductPage(req,res,"HandBags")})
app.get("/Beauty",(req,res)=>{getProductPage(req,res,"Beauty")})
app.get("/Fragrances",(req,res)=>{getProductPage(req,res,"Fragrances")})

app.get("/register", (req, res) => {
  res.render("register");
});



app.get("/login", (req, res) => {
  res.render("login");
});


//admin routes 
app.get("/Dashboard", isAuthenticated, getArticles);



//user routes 
app.post("/register", RegisterController);
app.post("/login", LoginController);
app.post("/user/delete", DeleteController);


app.get("/get/article/:id" , getSingleArticle )

//article routes 
app.get("/add/article", isAuthenticated, (req, res) => {
  res.render("addArticle");
});

app.post("/add/article", multimid, createArticle);
app.post("/edit/article/:id",multimid, editArticle)
app.get("/del/article/:id",deleteArticle )

app.listen(port, () => {
  console.log(" server started on port 4001");
});
