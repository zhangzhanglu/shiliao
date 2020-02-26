const express = require("express");
const router = express.Router();
const SQLConnect = require("./SQLConnect");
const url = require('url');
const foodlist = require("./data/foodlist");
const fooddesc = require("./data/fooddesc");

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
})

// 注册

//查看商品列表
router.get("/selectfoodlist",(req,res)=>{
    res.send(foodlist)
})

// 查看商品详情
router.get("/selectfooddesc",(req,res)=>{
    var id = url.parse(req.url, true).query.id 
    res.send(fooddesc.data.filter(function(item){
        return item && item.id == id;
    }))
})

module.exports = router;