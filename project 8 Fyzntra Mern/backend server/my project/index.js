const express = require ("express")      // importing express from node modules 
const bodyParser = require("body-parser")
const cors =require("cors")

const {
    loginController,
    registerController,
    deleteUserController} =require("./controllers/usercontrollers")

const { connectDb } = require("./config/connDB")
const port = 4002
const server =  express() 
server.use(bodyParser.json())
server.use(cors())
connectDb()

 //apis routes 
server.get("/" , (req,res)=>{res.send("hello")})
server.post("/register" , registerController ) 
server.post("/login" , loginController ) 
server.delete("/delete", deleteUserController)





server.listen(port , ()=>{console.log(`Server started on Port ${port}`)})
