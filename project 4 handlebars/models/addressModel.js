const mongoose = require ("mongoose")


const Address = mongoose.model("Address" , {

   name : String,
   street : String,
   city : String,
   state : String,
   pincode : Number,
   bookId : {type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',}

})


module.exports = Address