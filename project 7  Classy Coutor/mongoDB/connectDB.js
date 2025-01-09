const mongoose = require("mongoose");
const url =
  "mongodb+srv://fizzaqasim829:Xgzq2ZZQhhnhAoyD@classycouture.74oka.mongodb.net/?retryWrites=true&w=majority&appName=classycouture";
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
