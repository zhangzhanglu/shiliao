const express = require("express");
const router = express.Router();
const SQLConnect = require("./SQLConnect.js");
const url = require('url');
const fs = require('fs');
const multer=require('multer');

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
})

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
})
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
})
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
})

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
})

const homeData = require("./data/home");
const ceshiData = require("./data/ceshi");
const ceshiResultData = require("./data/ceshiResult");
const meirishipuData = require("./data/shipu");


// 首页数据接口
router.get("/homedata", (req,res) => {
    res.send(homeData)
})
router.get("/ceshidata", (req,res) => {
    res.send(ceshiData)
})
// 测试结果
router.get("/ceshiresultdata", (req, res) => {
    res.send(ceshiResultData)
})
// 每日食谱数据
router.get("/meirishipudata", (req, res) => {
    res.send(meirishipuData)
})



module.exports = router;