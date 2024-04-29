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
      res.redirect("/login");
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


const loginhandler = (req, res) => {
  res.json({message: " wait developer are working on this handler "})
};

module.exports = { registerhandler, loginhandler, deleteHandler };
