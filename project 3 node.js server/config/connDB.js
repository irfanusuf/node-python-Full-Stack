const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/cognitiveLearning";

const connectDb = async () => {
  if (mongoose.connect(url)) {
    console.log(`DataBase Connected on ${url}.`);
  } else {
    console.log("Database error!");
  }
};

module.exports = { connectDb };
