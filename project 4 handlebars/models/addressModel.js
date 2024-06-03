const mongoose = require ("mongoose")


const Address = mongoose.model("Address" , {

   name : String,
   street : String,
   city : String,
   state : String,
   pincode : Number,
   bookId : String

})


module.exports = Address