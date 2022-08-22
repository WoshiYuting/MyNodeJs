const db = require("../config/db.config");
const {isEmpty} = require("../config/helper")

const getAll = (req, res) => {
    var sql = "SELECT * FROM user";
    db.query(sql,(err,resule)=>{
        if(!res.err){
            res.json({
                list : resule
            })
        }else{
            res.json({
                error : true,
                message : err
            })
        }
    })
};

const create = (req,res) => {
    var message = {};
    var body = req.body;
    if(body){
        if(isEmpty(body.name)){
            message.name = "param name require!"
        }else if(isEmpty(body.code)){
            message.code = "param code require!"
        }
    }
    if(Object.keys(message).length > 0 ){
        res.json({
            error : true,
            message : message
        })
    }else{
        const {
            name,code,description
        } = req.body;
        var sql = "INSERT INTO role (`name`,`code`,`discription`) VALUES (?,?,?)";
        db.query(sql,[name,code,description],(err,result)=>{
            if(!err){
                if(result.affectedRows != 0){
                    res.json({
                        message : "Insert success"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }
};

const update = (req,res) => {
    var message = {};
    var body = req.body;
    if(body){
        if(isEmpty(body.name)){
            message.name = "param name require!"
        }else if(isEmpty(body.code)){
            message.code = "param code require!"
        }
    }
    if(Object.keys(message).length > 0 ){
        res.json({
            error : true,
            message : message
        })
    }else{
        const {
            name,code,description
        } = req.body;
        var sql = "UPDATE role SET `name` = ? ,`code` = ? ,`discription` = ?";
        db.query(sql,[name,code,description],(err,result)=>{
            if(!err){
                if(result.affectedRows != 0){
                    res.json({
                        message : "Update success"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }
};
const remove = (req,res) => {
    var body = req.body
    var message = {};
    if(body){
        if(isEmpty(body.id)){
            message.id = "param id require!"
        }
    }
    if(Object.keys(message).length > 0 ){
        res.json({
            error : true,
            message : message
        })
    }else{
        db.query("DELETE FROM role WHERE id = ?",[body.id],(err,result)=>{
            if(!err){
                if(result.affectedRows != 0){
                    res.json({
                        message : "Remove success"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message :err
                })
            }
        })
    }
};

const assignRole = (req,res) => {
    var {user_id,role_id} = req.body;
    if(body){
        if(isEmpty(user_id)){
            message.user_id = "param user_id require!"
        }
        if(isEmpty(role_id)){
            message.role_id = "param role_id require!"
        }
    }
    if(Object.keys(message).length > 0 ){
        res.json({
            error : true,
            message : message
        })
    }else{
        db.query("INSERT INTO ueser_role (`user_id`, `role_id`) VALUES (?,?) ",[user_id,role_id],(err,result)=>{
            if(!err){
                if(result.affectedRows != 0){
                    res.json({
                        message : "Inset success"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message :err
                })
            }
        })
    }
}


module.exports = {
  getAll,
  create,
  update,
  remove,
  assignRole
};