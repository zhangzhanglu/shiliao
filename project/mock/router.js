const express = require("express");
const router = express.Router();

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