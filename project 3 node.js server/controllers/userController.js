const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    const encryptPass = await bcrypt.hash(password, 10);

    if (!existingUser) {
      const newUser = new User({ username, email, password: encryptPass });

      await newUser.save();

      if (newUser) {
        res.json({ message: "user Saved Succesfully" });
      } else {
        res.json({ message: "some Error" });
      }
    } else {
      res.json({ message: "user Already Exists!" });
    }
  } catch (err) {
    console.log(err);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email !== "" && password !== "") {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const passVerify = await bcrypt.compare(
          password,
          existingUser.password
        );

        const _id = existingUser._id;

        if (passVerify) {
          const token = await jwt.sign({ _id }, "thisismysecretkey");

          res.json({ message: "logged in successfully!", token });
        } else {
          res.json({ message: "incorrect password" });
        }
      } else {
        res.json({ message: "user not Found" });
      }
    } else {
      res.json({ message: "All credentials Required" });
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteUserContoller = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId !== undefined && userId !== "") {
      const existingUserDel = await User.findByIdAndDelete(userId);

      if (existingUserDel) {
        res.json({ message: "User deleted Sucessfully!" });
      } else {
        res.json({ message: "Some Error | User not Found" });
      }
    } else {
      res.json({ message: "No Query passed" });
    }
  } catch (err) {
    res.json({ message: "Server Error" });
    console.log(err);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { userId } = req.query;
    let { oldPass, newPass } = req.body; // declare

    if (userId !== undefined && userId !== "") {
      let existingUser = await User.findById(userId);

      if (newPass !== "" && oldPass !== "") {
        newPass = await bcrypt.hash(newPass, 10);

        const checkPass = await bcrypt.compare(oldPass, existingUser.password);

        if (checkPass) {
          existingUser = await User.findByIdAndUpdate(userId, {
            password: newPass,
          });
          res.json({ message: "Password updated Sucessfully" });
        } else {
          res.json({ message: "incorrect old password" });
        }
      } else {
        res.json({ message: "kindly provide all details" });
      }
    } else {
      res.json({ message: "Query not Given or empty" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerController,
  loginController,
  deleteUserContoller,
  updatePassword,
};
