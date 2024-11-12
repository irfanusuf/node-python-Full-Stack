




const mongoose = require("mongoose")



const Blog = mongoose.model("Blog" , {
 
    title : String,
    description : String,
    blogImageUrl : String,
    likes : [] ,
    comments : []

})

module.exports ={Blog}