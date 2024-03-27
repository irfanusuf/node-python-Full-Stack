const express = require ("express")      // importing express from node modules 

 //express is  a minimalistic frame work for making a backend server in 
 //which u can write controller function of restFul apis
 

const server =  express() 

server.get("/" ,  (req ,res)=>{ res.send("heeelo world ")})





server.listen(4000 , ()=>{console.log("Server started on Port 4000")})