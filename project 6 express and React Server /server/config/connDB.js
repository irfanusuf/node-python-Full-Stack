const mongoose = require("mongoose");

const connDb = async () => {
  try {
    const uri = "mongodb+srv://irfanusuf33:classy_123@classy-contour.52tbu.mongodb.net/blogSpot?retryWrites=true&w=majority&appName=classy-contour";

    await mongoose.connect(uri);

    console.log("Db Connected on Community Server ");
  } catch (error) {
    console.error("Error Connecting Db: " + error);
  }
};



module.exports = {connDb}     // export 