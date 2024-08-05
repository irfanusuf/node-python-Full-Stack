const express = require ("express")      // importing express from node modules 
const bodyParser = require("body-parser")
const cors =require("cors")

const {
    registerController ,
    loginController,  
    deleteUserContoller,
    updatePassword} =require("./controllers/userController")

const { connectDb } = require("./config/connDB")
const port = 4002
const server =  express() 


//middlewares
server.use(bodyParser.json())
server.use(cors())

connectDb()

 //apis routes 
  
server.post("/user/register" , registerController ) 
server.post("/user/login" , loginController )
server.delete("/user/delete" , deleteUserContoller)
server.put("/user/updatepass" , updatePassword)





server.listen(port , ()=>{console.log(`Server started on Port ${port}`)})