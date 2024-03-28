const express = require ("express")      // importing express from node modules 
const bodyParser = require("body-parser")

const {
    registerController ,
    loginController  } =require("./controllers/userController")

const { connectDb } = require("./config/connDB")
const port = 4002
const server =  express() 
server.use(bodyParser.json())
connectDb()

 //apis routes 
  
server.post("/register" , registerController ) 
server.post("/login" , loginController ) 





server.listen(port , ()=>{console.log(`Server started on Port ${port}`)})