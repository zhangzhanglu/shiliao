const express = require("express");
const router = express.Router();
const SQLConnect = require("./SQLConnect.js");
const url = require('url');

// 食疗坊
const foodlist = require("./data/foodlist");
const fooddesc = require("./data/fooddesc");

// 首页
const homeData = require("./data/home");
const ceshiData = require("./data/ceshi");
const ceshiResultData = require("./data/ceshiResult");
const meirishipuData = require("./data/shipu");

const simpleTestData = require("./data/test/simpleTest")
const specialtyTestData = require("./data/test/specialtyTest")
const hellpData  =require("./data/hellp")

// 登录
router.post("/login",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(username === 'zl' && password === '123'){
        res.send({
            code:200,
            msg:"登陆成功",
            username:"csm",
            token:"NJOVNIEHFUDN"
        })
    }else{
        res.send({
            code:500,
            msg:"登陆失败"
        })
    }
});

// 注册

//查看商品列表
router.get("/selectfoodlist",(req,res)=>{
    res.send(foodlist)
});

// 查看商品详情
router.get("/selectfooddesc",(req,res) =>{
    var id = url.parse(req.url, true).query.id 
    res.send(fooddesc.data.filter(function(item){
        return item && item.id == id;
    }))
});

// 首页数据接口
router.get("/homedata", (req,res) => {
    res.send(homeData)
});
router.get("/ceshidata", (req,res) => {
    res.send(ceshiData)
});
// 测试结果
router.get("/ceshiresultdata", (req, res) => {
    res.send(ceshiResultData)
});
// 每日食谱数据
router.get("/meirishipudata", (req, res) => {
    res.send(meirishipuData)
});

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
});

//身体症状的查询
router.get("/physicalSymptoms", (req, res) => {
    const sql = "select * from physicalSymptoms";
    SQLConnect(sql, null, (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: {
                    result: result
                }
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }

    })
});

//身体症状的添加
router.get("/addPhysicalSymptoms", (req, res) => {
    var content = url.parse(req.url, true).query.content;
    const sql = "insert into physicalSymptoms values (null,?,0)";
    var arr = [content];
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
});

//今日目标的查询
router.get("/target", (req, res) => {
    const sql = "select * from target";
    SQLConnect(sql, null, (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: {
                    result: result
                }
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }

    })
});
//今日目标的添加
router.get("/addTarget", (req, res) => {
    var content = url.parse(req.url, true).query.content;
    const sql = "insert into target values (null,?,0)";
    var arr = [content];
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
});

//症状调理查询数据
router.get("/zhengzhuang", (req, res) => {
    var zId = url.parse(req.url, true).query.zId || 0;
    const sql = "select * from zhengzhuang where zId=?";
    var arr = [zId]
    SQLConnect(sql, arr, (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: {
                    result: result
                }
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }

    })
});

module.exports = router;
