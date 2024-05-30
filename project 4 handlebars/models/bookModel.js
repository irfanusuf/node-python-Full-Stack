const mongoose = require ("mongoose")


const Book = mongoose.model("Book" , {

    bookTitle : String,
    bookAuthor : String,
    bookDescription : String,
    bookPrice : Number,
    bookImgUrl : String
    

})


module.exports = Book