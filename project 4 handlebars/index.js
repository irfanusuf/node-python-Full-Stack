const express = require("express"); //import
const path = require("path");
const  connectDB = require('./config/dbConnect');
const { registerhandler, loginhandler } = require("./controllers/userController");
const bodyParser = require("body-parser");


const port = 3000;

const app = express();

connectDB()


//middle wares
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));



// rendering is on server side      SSR

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"));
});


app.post("/register", registerhandler)
app.post("/login", loginhandler)




app.listen(port, () => {
  console.log(`server started on  ${port}`);
});
