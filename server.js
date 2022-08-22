const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("");
})

require("./app/routes/teacher.routes")(app)
require("./app/routes/student.routes")(app)
require("./app/routes/customer.routes")(app)
require("./app/routes/category.routes")(app)
require("./app/routes/course.routes")(app)
require("./app/routes/auth.routes")(app)
require("./app/routes/classroom.routes")(app)
require("./app/routes/studentclassroom.routes")(app)

const port = process.env.PORT || 8080
app.listen(8080,()=>{
    console.log("Server run on port : localhost" + port)
})