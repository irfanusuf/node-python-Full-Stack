const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerhandler = async (req, res) => {
  const { email, username, password } = req.body;

  if (email !== "" && username !== "" && password !== "") {
    const isUser = await User.findOne({ email });

    if (!isUser) {
      const encryptpass = await bcrypt.hash(password, 10);
      const newUser = await new User({
        email,
        username,
        password: encryptpass,
      });
      await newUser.save();

      // res.render("register" , {successMessage : "User saved Succesfully!"});
      res.redirect("/user/login");
    } else {
      res.render("register", { message: "User already Exists!" });
    }
  } else {
    res.render("register", { message: "All Credentials Required !" });
  }
};

const deleteHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const verifyAccount = await bcrypt.compare(password, user.password);
      if (verifyAccount) {
        await User.findByIdAndDelete(user._id);
        res.json({ message: "Deleted Succesfully!" });
      } else {
        res.json({ message: "Password Incorrect" });
      }
    } else {
      res.json({ message: "User doesnot Exists" });
    }
  } catch (err) {
    console.log(err);
  }
};

const loginhandler = async (req, res) => {
  const { email, password } = req.body;
   // example 

   // seeding admin
      const AdminEmail = "irfanusuf33@gmail.com"
      const AdminPassWord = "12345"


  if (email !== "" && password !== "") {
    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      const verifyPss = await bcrypt.compare(password, isExistingUser.password);
      if (verifyPss) {

        const generateToken = await jwt.sign(
          { userId: isExistingUser._id },
          "thgiismysecretkey"
        );

        res.cookie("token", generateToken, {
          maxAge: 24 * 60 * 60 * 1000, // milliseconds
          secure: true,
          httpOnly: true,
        });


        if(email === AdminEmail && password === AdminPassWord) {
            res.redirect("/admin/dashboard");
        }
        else{
          res.redirect("/user/dashboard");
        }
      
      } else {
        res.render("login", { message: "PassWord incorrect!" });
      }
    } else {
      res.render("login", { message: "User Not Found!" });
    }
  } else {
    res.render("login", { message: "All credentials Required!" });
  }
};





module.exports = { registerhandler, loginhandler, deleteHandler };
