const { response } = require("express")
const db = require("../config/db.config")

function getAll(req,res){
    var sql = "SELECT * FROM customer;"
    db.query(sql,(err,result,field)=>{
        if(err){
            res.send(err)
        }else{
            res.json({
                customer : result,
                field : field,
            })
        }
    })
    db.end();
    // res.send("Get all customer")
}

function getOne(req,res){
    var id = req.params.id;
    // var id = "2; DELETE  FROM customer WHERE id = 1"
    // var sql = "SELECT * FROM customer WHERE id = "+id+" AND statuse = " + 1;
    var sql = "SELECT * FROM customer WHERE id = ? AND address_id = ?"; 
    db.query(sql,[id,1],(err,result)=>{
        if(err){
            res.json({
                error:true,
                data_error : err
            })
        }else{
            res.json({
                customer : result
            })
        }
    })
    // db.query(sql,function(err,re,f){ // function(err,re,f){} == (err,re,f)=>{}

    // })
}
function create(req,res){
    var {
        id,
        firstname,
        lastname,
        tel,
        dob,
        address_id,
        gender,
    } = req.body;

    var message = "";
    if(id == null || id == ""){
        message = "id required!";
    }
    else if(firstname == null || firstname == ""){
        message = "firstname requred!";
    }else if(lastname == null || lastname == ""){
        message = "lastname requred!";
    }else if(tel == null || tel == ""){
        message = "tel requred!";
    }else if(address_id == null || address_id == ""){
        message = "address_id requred!";
    }

    if(message != ""){
        res.json({
            error : true,
            message : message
        })
    }else{
       var sqlInsert = "INSERT INTO customer (`id`, `firstname`, `lastname`, `gender`, `dob`, `tel`, `address_id`) VALUES (?,?,?,?,?,?,?)";
       db.query(sqlInsert,[id,firstname,lastname,gender,dob,tel,address_id],(err,result,field)=>{
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

function remove(req,res){
    if(req.body.id == null || req.body.id == ""){
        res.json({
            error : true,
            message : "param id required!",
        })
    }else{
        var sqlDelete = "DELETE FROM customer WHERE id = ?;"

        db.query(sqlDelete,[req.body.id],(err,result)=>{
            if(err){
                res.json({
                    error : true,
                    message : err,
                })
            }else{
                res.json({
                    message : result.affectedRows  != 0 ? "Delete success!" : "customer id not found!",
                })
            }
        })
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    remove
}