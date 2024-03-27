const express = require ("express")      // importing express from node modules 
const {homeController ,
    registerController ,
    loginController  } =require("./controllers/userController")

const port = 4002




 

const server =  express() 
 //apis routes 
server.get("/" ,  homeController)   
server.get("/register" , registerController ) 
server.get("/login" , loginController ) 





server.listen(port , ()=>{console.log(`Server started on Port ${port}`)})