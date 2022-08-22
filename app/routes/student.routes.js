const student = (app) => {
    const router = require("express").Router();
    const student_controller = require("../controller/student.controller")
    const {validateToken} = require("../controller/auth.controller")
    router.get("/api/student",validateToken,student_controller.getList)
    router.get("/api/student/:id",validateToken,student_controller.getOne)
    router.post("/api/student",validateToken,student_controller.create)
    router.put("/api/student",validateToken,student_controller.edit)
    router.delete("/api/student",validateToken,student_controller.remove)

    app.use(router);

}

module.exports = student;