const { response } = require("express")
const db = require("../config/db.config")
// let teacher = [
//     {
//         id : 101,
//         name : "Jo",
//         gender : "male",
//         email : "jo@gmail.com"
//     },
//     {
//         id : 102,
//         name : "Jing",
//         gender : "female",
//         email : "jing@gmail.com"
//     },
//     {
//         id : 103,
//         name : "John",
//         gender : "male",
//         email : "john@gmail.com"
//     },
//     {
//         id : 104,
//         name : "Ji",
//         gender : "female",
//         email : "ji@gmail.com"
//     }
// ]

// const getlist = (req,res) =>{
//     // var record = teacher.length
//     // res.json({
//     //     total_record : record,
//     //     list : teacher
//     // })
//     db.query("SELECT teacher_id, fname, lastname, FROM `teacher`;",(err,result)=>{
//         if(!err){
//             res.send(result)
//         }
//         else{
//             console.log(err)
//         }
//     })
// }
function getAll(req,res){
    var sql = "SELECT * FROM teacher;"
    db.query(sql,(err,result,field)=>{
        if(err){
            res.send(err)
        }else{
            res.json({
                list : result,
                field : field,
            })
        }
    })
    db.end();
}

// const getOne = (req,res) => {
//    var params = (req.params);
//    var list = teacher.filter((item,index)=>(item.id == params.id))

//     res.json({
//         list  : list
//     })
// }
const getOne = (req,res) => {
    var params = req.params;
    if(params != null && params.id)
    {
        sql = "SELECT * FROM teacher WHERE teacher_id = ?"; 
        db.query(sql,[params.id],(err,result)=>{
            if(!err){
                res.json({
                    teacher : result
                })
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }else{
        res.json({
            error : true,
            message : "ID required!"
        })
    }
}
// const create = (req,res) => {
//     var body = req.body

//     var message = ""
//     if(body.id == null || body.id == ""){
//         message = "param id require!";
//     }else if(body.name == null || body.name == ""){
//         message = "param name require!";
//     }else if(body.gender == null || body.gender == ""){
//         message = "param gender require!";
//     }else if(body.email == null || body.email == ""){
//         message = "param email require!";
//     }

//     if(message == ""){
//         // check if existing id
//         var list = teacher.filter((item,index)=>item.id == body.id);
//         if(list.length !=0 ){
//             res.json({
//                 error : true,
//                 message : "Teacher id already exist! Please try other"
//             })
//         }else{
//             teacher.push(body)
//             res.json({
//                 message : "Add success"
//             })
//         }
//     }else {
//         res.json({
//             error : true,
//             message :message
//         })
//     }
// }
function create(req,res){
    var {
        firstname,
        lastname,
        gender,
        tel,
        email,
        description
    } = req.body;

    var message = "";
    if(firstname == null || firstname == ""){
        message = "firstname requred!";
    }else if(lastname == null || lastname == ""){
        message = "lastname requred!";
    }else if(tel == null || tel == ""){
        message = "tel requred!";
    }else if(email == null || email == ""){
        message = "email requred!";
    }

    if(message != ""){
        res.json({
            error : true,
            message : message
        })
    }else{
       var sqlInsert = "INSERT INTO teacher (`firstname`, `lastname`, `gender`,`tel`, `email`, `description`) VALUES (?,?,?,?,?,?)";
       db.query(sqlInsert,[firstname,lastname,gender,tel,email,description],(err,result,field)=>{
            if(err){
                res.json({
                    error : true,
                    message : err
                })
            }else{
                res.json({
                    message : "Insert Success",
                    field : field,
                    list : result
                })
            }
       })
    }   
}
// const edit = (req,res) => {
//     var body = req.body;
//     // const id = req.params.id;
//     var message = ""
//     if(body.id == null || body.id == ""){
//         message = "param id require!";
//     }   
//     else if(body.name == null || body.name == ""){
//         message = "param name require!";
//     }else if(body.gender == null || body.gender == ""){
//         message = "param gender require!";
//     }else if(body.email == null || body.email == ""){
//         message = "param email require!";
//     }
//     console.log("------Before update------")
//     console.log(teacher)
//     if(message == ""){
//         var list = teacher.filter((item,index)=>item.id == body.id)
//         if(list.length != 0){// check if id exist in list teacher
//             var listTmp = teacher.map((item,index)=>{
//                 // item = {
//                 //     id : 104,
//                 //     name : "Ji",
//                 //     gender : "female",
//                 //     email : "ji@gmail.com"
//                 // }
//                 if(item.id == body.id){
//                     return {
//                         ...item,
//                         name : body.name,
//                         gender : body.gender,
//                         email : body.email,
//                     }
//                 }
//                 // if(item.id == id){
//                 //     return {
//                 //         ...item,
//                 //         name : body.name,
//                 //         gender : body.gender,
//                 //         email : body.email,
//                 //     }
//                 // }
//                 return {
//                     ...item
//                 }
//             })
//             console.log("-----After Updated-----")
//             console.log(listTmp)
//             teacher = listTmp
//             res.json({
//                 message : "ID " + body.id + " update success!"
//             })
//             // res.end(JSON.stringify({message : "ID " + id + " update success!"}))
//         }
//     }
// }
function edit(req,res){
    var {
        teacher_id,
        firstname,
        lastname,
        gender,
        tel,
        email,
        description
    } = req.body;

    var message = "";
    if(teacher_id == null || teacher_id == ""){
        message = "teacher_id requred!";
    }else if(firstname == null || firstname == ""){
        message = "firstname requred!";
    }else if(lastname == null || lastname == ""){
        message = "lastname requred!";
    }else if(tel == null || tel == ""){
        message = "tel requred!";
    }else if(email == null || email == ""){
        message = "email requred!";
    }

    if(message != ""){
        res.json({
            error : true,
            message : message
        })
    }
    else{
        var sqlUpdate = "UPDATE teacher SET firstname=?, lastname=?, gender=?, tel=?, email=?, description=?  WHERE teacher_id = ?"

        db.query(sqlUpdate,[firstname,lastname,gender,tel,email,description,teacher_id],(err,result)=>{
            if(!err){
                res.json({
                    message : "Update Sucessfully!"
                })
            }else{
                res.json({
                    error : true,
                    message : err,
                })
            }
        })
    }
}
function remove(req,res){
    if(req.body.teacher_id == null || req.body.teacher_id == ""){
        res.json({
            error : true,
            message : "param id required!",
        })
    }else{
        var sqlDelete = "DELETE FROM teacher WHERE teacher_id = ?;"

        db.query(sqlDelete,[req.body.teacher_id],(err,result)=>{
            if(err){
                res.json({
                    error : true,
                    message : err,
                })
            }else{
                res.json({
                    message : result.affectedRows  != 0 ? "Delete success!" : "teacher id not found!",
                })
            }
        })
    }
}

// const remove = (req,res) => {
//     var message = "";
//     var body = req.body;
//     if(body.id == null || body.id == ""){
//         message = "Param id require!";
//     }
//     if(message == ""){
//         var listTmp = teacher.filter((item,index)=>(item.id != body.id))
//         teacher = listTmp
//         res.json({
//             message : "Delete success!"
//         })
//     }
// }

module.exports = {
    getAll,
    getOne,
    create,
    edit,
    remove
}