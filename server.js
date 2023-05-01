 
const express = require('express');
 

const server = express();

 const PORT=3000;

 server.get('/',(req,res)=>{
    
    function GetDataJson ( titleValur ,  pathVal ,  obverVal){
 
this.titleValur=titleValur;
 
this.pathVal=pathVal;
 
this.obverVal=obverVal;
    
    }
 let move= new  GetDataJson(  Object.values(dataJson)[0] ,
     Object.values(dataJson)[4],  
   Object.values(dataJson)[7] );

   res.send(move);
 })

 server.get('/favorite',(req,res)=>{
    res.send("Welcome to Favorite Page");
 })
 server.get('/favorite1',(req,res)=>{
    res.status(500).send("status: 500"+
    "responseText:"+ "Sorry, something went wrong");

 })
 const dataJson = require("./MovieData/data.json");
  


 
 server.get('*',(req,res)=>{
    res.status(404).send("page not found error");

 })
 

 server.listen(PORT,()=>{
    console.log("server");
 })