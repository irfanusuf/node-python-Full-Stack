const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
  const { email, username, password } = req.body;
  if (email !== "" && username !== "" && password !== "") {
    const existinguser = await User.findOne({ email });
    if (!existinguser)
   {
        const encryptpass = await bcrypt.hash(password,10)
      const newuser = await new User({ email, username, password: encryptpass});
      await newuser.save();
      res.redirect("/login")
    } else {
      res.render("register",{message:"User Already Exists!"})
    }
  } else {
       res.render("register",{message:"All Credentials Required!"})
  }
};


const DeleteController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);

    if (user) {
      const verifyAccount= await bcrypt.compare(password, user.password);
    
      if (verifyAccount) {
        await User.findByIdAndDelete(user._id);
        res.json({ message: "Deleted Succuessfully" });
      } else {
        res.json({ message: "Password Incorrect" });
      }
    } else {
      res.json({ message: "User doesnot Exist" });
    }
  } catch (err) {
    console.log(err);
  }
};



const LoginController = async(req,res) => {

  try {
    const{email,password}= req.body;
if (email !=="" && password !=="") {
  const existinguser = await User.findOne({email})
  if (existinguser) {
    const verifypass = await bcrypt.compare(password,existinguser.password)
    if (verifypass) {
     const generateToken = await jwt.sign({userId:existinguser._id}, "passwordkyahai");

     res.cookie("token",generateToken,{
      maxAge: 24*60*60*1000, 
      secure: true,
      httpOnly: true,

     });
      res.redirect("/")
    } else {
      res.render("login",{message: "Wrong Password!"})
    }
  } else {
    res.render("login", {message: "User Not Found!"})
  }
} else {
  res.render("login", {message:"All Credentials Required!"})
}





  } catch (err) {
    console.log(err)
  }





};

module.exports = { RegisterController, LoginController, DeleteController };
