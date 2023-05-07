 
const express = require('express');
 const cors =require('cors');
 const pg = require('pg');
const axios = require('axios');
const server = express();
const client= new pg.Client("postgresql://localhost:5432/lab15");

server.use(cors())
 const PORT=3000;

 server.get('/',homeHandlar);
  server.get('/search',searchFunction)

  async  function searchFunction(req,res){
   const url="https://api.themoviedb.org/3/trending/all/week?api_key=14a375a649743222ae5e7069be734fe3&language=en-US";
   let axiosResult = await axios.get(url);
    
   console.log(axiosResult.data.results)
   res.send(axiosResult);
  }
    function homeHandlar(req , res){
      function GetDataJson ( titleValur ,  pathVal ,  obverVal){
 
         this.titleValur=titleValur;
          
         this.pathVal=pathVal;
          
         this.obverVal=obverVal;
    }
 let move= new  GetDataJson(  Object.values(dataJson)[0] ,
     Object.values(dataJson)[4],  
   Object.values(dataJson)[7] );

   res.send(move);
 }


 server.get('/favorite' , favoritHandelar)

 function favoritHandelar(req , res){
   
      res.send("Welcome to Favorite Page");
   }
 
 server.get('/favorite1',(req,res)=>{
    res.status(500).send("status: 500"+
    "responseText:"+ "Sorry, something went wrong");

 })
 const dataJson = require("./MovieData/data.json");
  

  async function getApiResult (req,res){
const url="https://api.themoviedb.org/3/trending/all/week?api_key=14a375a649743222ae5e7069be734fe3&language=en-US";
let axiosResult = await axios.get(url);
 
// console.log(axiosResult.data.results)
// res.send(axiosResult);

try{    
   axios.get(url)
   .then(result => {
       let mapResult = axiosResult.data.results.map(item => {
           let singleRecipe = new Movie(item.id, item.title, item.original_language, item.summary ,item.original_title ,item.overview);
           return singleRecipe;
       })
       res.send(mapResult)

   })
   .catch((error)=>{
       console.log('sorry you have something error',error)
       res.status(500).send(error);
   })

}
catch(error){
   errorHandler(error,req,res)
}
}
 
function Movie(id,  title,  original_language,  summary , original_title ,overview){
this.id=id;
this.title=title;
this.original_language=original_language;
this.summary=summary
this.overview=overview
this.original_title=original_title;
}
server.get('/popularity',popularity)

 async function popularity(req , res){
   const url="https://api.themoviedb.org/3/trending/all/week?api_key=14a375a649743222ae5e7069be734fe3&language=en-US";
   let axiosResult = axios.get(url);
   await res.send(axiosResult.popularity);
   console.log(axiosResult)
}

server.get('/vote_average',vote_average)

 async function vote_average(req , res){
   const url="https://api.themoviedb.org/3/trending/all/week?api_key=14a375a649743222ae5e7069be734fe3&language=en-US";
   let axiosResult = axios.get(url);
   await res.send(axiosResult.vote_average);
   console.log(axiosResult)
}

 server.get('/trending',getApiResult) 
 server.get('*',(req,res)=>{
    res.status(404).send("page not found error");

 })
 

 server.listen(PORT,()=>{
    console.log("server");
 })