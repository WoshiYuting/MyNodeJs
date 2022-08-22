console.log("Welcome");
console.log("Hello Node.js");
console.log(20%3);

var x = 10; //x is a variable
x = 100;
x = "Jojo";
x = 2.3;
x = 100+10+"10";
var y = 10;
var y = 20;
var sum = x+y;
console.log("value x = "+x);
console.log("value y = "+y);
console.log("sum = "+sum);

let value1 = 10;

const PI = 3.14;
const country = "USA";

var obj1 = { //object
    id : 101,
    name : "JJ",
    gender : "Male"
}
// id name gender // key of object or properties
console.log(obj1.id+"\t"+obj1.name+"\t"+obj1.gender)

var arr_course = ["ReactJS","C#","C++","Node.JS"];
var arr_person = [
    {
        id : 101,
        name : "JJ",
        gender : "Male"
    },
    {
        id : 102,
        name : "JP",
        gender : "Female"
    },
    {
        id : 103,
        name : "JI",
        gender : "Male"
    }
];
for(var i=0;i<arr_course.length;i++){
    console.log(arr_course[i])
}

for(var i=0;i<arr_person.length;i++){
    var str_person = arr_person[i].id + "\t" + arr_person[i].name + "\t"+ arr_person[i].gender;
    console.log(str_person);
}

//console.log(arr_person[1].name + "\t" + arr_person[1].gender)
//console.log(arr_course[2]);
console.log(arr_course.length);
//npm install express (for config routes)
//nodemon to compile without pdach command
//thunder client doch postman
//get used for get data

const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/teacher",(req,res)=>{
    var obj = {}
    obj.method = req.method
    obj.url = req.url
    obj.path = req.path
    obj.baseUrl = req.baseUrl
    obj.ip = req.ip
    obj.hostname = req.hostname
    obj.originalUrl = req.originalUrl
    res.json(obj)
})
app.post("/api/teacher",(req,res)=>{
    var obj = {}
    obj.body = req.body
    res.json(obj)
})
// app.get("/api/teacher",(req,res)=>{
//     var arr_teacher = [
//         {
//             id : 1,
//             name : "Jojo",
//             email : "imjo@gmail.com"
//         },
//         {
//             id : 2,
//             name : "Koko",
//             email : "ko@gmail.com"
//         }
//     ]
//     var data  = {
//         teacher : arr_teacher
//     }
//     res.json(data)
// })



app.listen(8080,()=>{
    console.log("Server run on port : localhost:8080")
})