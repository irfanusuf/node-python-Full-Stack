const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerhandler = async (req, res) => {
  const { email, username, password } = req.body;

  if (email !== "" && username !== "" && password !== "") {
    console.log(email);
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
      res.redirect("/login")
    } else {
      res.render("register" , {message : "User already Exists!"});
    }
  } else {
    res.render("register" , {message : "All Credentials Required !"});
  }
};

const loginhandler = (req, res) => {
  console.log("function exported ");
};

module.exports = { registerhandler, loginhandler };
