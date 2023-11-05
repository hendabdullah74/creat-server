const express= require('express');
const mongoose =require('mongoose');
let app = express();
//connect server to mongo server ==>local server

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/sana4');
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 }
 connect()
    

 
 //Schema
const sana4Schema= new mongoose.Schema({
   name:String,
   age : Number,
    phone:String,
    address:String,
});

let studentsModel = new mongoose.model("students",sana4Schema);
const coursesSchema= new mongoose.Schema({
    name: String,
    page : Number,
     dr    :String,
    discription :String
 });

 let coursesModel = new mongoose.model("courses",coursesSchema);


let newstudent = new studentsModel({
    name:"hend abdullah",
    age: 22,
    phone:"01098765",
    address:"alsharqia"
 
}).save();
let alistudent = new studentsModel({
    name:"ali ahmed",
    age: 21,
    phone:"0106698765",
    address:"alex"
 
}).save();
let mennastudent = new studentsModel({
    name:"menna ali",
    age: 21,
    phone:"0109876885",
    address:"alsharqia"
 
}).save();
let ahmedstudent = new studentsModel({
    name:"ahmed abdullah",
    age: 22,
    phone:"010985765",
    address:"alsharqia"
 
}).save();
let ranastudent = new studentsModel({
    name:"rana mohmed",
    age: 22,
    phone:"0109844765",
    address:"alsharqia"
 
}).save();

let mathcourse = new coursesModel({
    name:"the math",
    page: 223,
    dr: "mohmed",
    discription:"4ch"
}).save();
let sciencecourse = new coursesModel({
    name:"the science",
    page: 200,
    dr:"ahmed",
    discription:"3ch"
}).save();
let arabiccourse = new coursesModel({
    name:"arabic",
    page: 200,
    dr:"ali",
    discription:"5ch"
}).save();
let computercourse = new coursesModel({
    name:"computer",
    page: 180,
    dr:"abdullah",
    discription:"7ch"
}).save();
let humanrightscourse = new coursesModel({
    name:"the humanrights",
    page: 150,
    dr:"ezzat",
    discription:"4ch"
}).save();


app.listen(8080, function(){
    console.log('server now is opend')
}) 