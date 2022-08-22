
// const teacher = (app) => {
//     // const router = require("express").Router();
//     // const teachercontroller = require("../controller/teacher.controller")
//     // // router.get("/api/teacher",(req,res)=>{
//     // //     res.send("you call api get teacher")
//     // // })
//     // // router.post("/api/teacher",(req,res)=>{
//     // //     res.send("you request post teacher")
//     // // })
//     // router.get("/api/teacher",teachercontroller.getlist)
//     // router.get("/api/teacher/:id",teachercontroller.getOne)
//     // router.post("/api/teacher",teachercontroller.create)
//     // router.put("/api/teacher/:id",teachercontroller.edit)
//     // router.delete("/api/teacher",teachercontroller.remove)

//     // // router.post("/api/teacher/getlist",teachercontroller.getlist)
//     // // router.post("/api/teacher/getlist/:id",teachercontroller.getOne)
//     // // router.post("/api/teacher/create",teachercontroller.create)
//     // // router.post("/api/teacher/edit",teachercontroller.edit)
//     // // router.post("/api/teacher/remove",teachercontroller.remove)
//     // // router.post("/api/teacher/getTotal",teachercontroller.remove)
//     // // router.post("/api/teacher/getSummary",teachercontroller.remove)
//     // // router.post("/api/teacher/report",teachercontroller.remove)

//     const {getAll,getOne,create,edit,remove} = require("../controller/teacher.controller")
//     // const customer_controller = require("../controller/customer.controller")
//     app.get("/api/teacher",getAll)
//     app.get("/api/teacher/:id",getOne)
//     app.post("/api/teacher",create)
//     app.put("/api/teacher",edit)
//     app.delete("/api/teacher",remove)
//     // app.use(router);
// }
// module.exports = teacher;
const teacher = (app) => {
    const router = require("express").Router(); 
    const teacherController = require("../controller/teacher.controller")
    const {validateToken} = require("../controller/auth.controller")
    router.get("/api/teacher",validateToken,teacherController.getAll)
    router.get("/api/teacher/:id",validateToken,teacherController.getOne) // add route type params
    router.post("/api/teacher",validateToken,teacherController.create) 
    router.put("/api/teacher",validateToken,teacherController.edit)
    router.delete("/api/teacher",validateToken,teacherController.remove)

    // router.post("/api/teacher/getlist",teacherController.getLists)
    // router.post("/api/teacher/getlist/:id",teacherController.getOne)
    // router.post("/api/teacher/create",teacherController.create)
    // router.post("/api/teacher/edit",teacherController.edit)
    // router.post("/api/teacher/remove",teacherController.remove)
    // router.post("/api/teacher/getTotal",teacherController.remove)
    // router.post("/api/teacher/getSummary",teacherController.remove)
    // router.post("/api/teacher/report",teacherController.remove)

    app.use(router);
}

module.exports = teacher;