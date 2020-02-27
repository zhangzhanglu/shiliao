const express = require("express");
const router = express.Router();
const SQLConnect = require("./SQLConnect.js");
const url = require('url');

const simpleTestData = require("./data/test/simpleTest")
const specialtyTestData = require("./data/test/specialtyTest")
const hellpData  =require("./data/hellp")

//1.简易测试接口数据
router.get("/simpletest",(req,res)=>{
    res.send(simpleTestData)
})
//2.专业测试接口数据
router.get("/specialtytest",(req,res)=>{
    res.send(specialtyTestData)
})
//3.帮助和反馈接口
router.get("/hellpinfo",(req,res)=>{
    res.send(hellpData)
})
//4.用户基础信息添加
router.get("/add/baseUserInfo",(req,res)=>{
    var name = url.parse(req,url,true).query.name;
    var sex = url.parse(req,url,true).query.sex;
    var city = url.parse(req,url,true).query.city;
    var birthday = url.parse(req,url,true).query.birthday;
    var illness = url.parse(req,url,true).query.illness;
    
    const sql = "insert into baseuserinfo values(null,?,?,?,?,?)"
    var arr = [name,sex,city,birthday,illness];
    SQLConnect(sql, arr, (result) => {
        if (result.affectedRows > 0) {
            res.send({
                status:200,
                success: true
            })
        } else {
            res.status(500).send({
                msg: "添加失败"
            });
        }
    })
    
})
module.exports= router;