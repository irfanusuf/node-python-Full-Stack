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

      res.send("User registered Succesfully!");
    } else {
      res.send("User already Exists!");
    }
  } else {
    res.send("All credentials required!");
  }
};

const loginhandler = (req, res) => {
  console.log("function exported ");
};

module.exports = { registerhandler, loginhandler };
