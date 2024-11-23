const express = require ("express")      // importing express from node modules 
const bodyParser = require("body-parser")
const cors =require("cors")

const {
    registerController ,
    loginController,  
    deleteUserContoller,
    updatePassword} =require("./controllers/userController")

const {  connDb } = require("./config/connDB")
const { createBlogHandler, getAllBlogsHandler, likeHandler } = require("./controllers/blogController")
const multMid = require("./middlewares/multer")
const port = 4002
const server =  express() 


//middlewares
server.use(bodyParser.json())
server.use(cors())

connDb()

 //apis routes 
  
server.post("/user/register" , registerController ) 
server.post("/user/login" , loginController )
server.delete("/user/delete" , deleteUserContoller)
server.put("/user/updatepass" , updatePassword)




server.post("/user/create/blog" ,multMid , createBlogHandler)
server.get("/getAllBlogs" , getAllBlogsHandler  )
server.get("/user/like/:blogId/:userId" , likeHandler )




server.listen(port , ()=>{console.log(`Server started on Port ${port}`)})