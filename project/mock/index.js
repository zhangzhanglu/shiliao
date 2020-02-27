const express = require("express")
const app = express();
const router =require('./router.js')
const bodyParser = require("body-parser")
var debug = require('debug')('my-application');
app.use("/",router)
// post请求数据方案
app.use(bodyParser.urlencoded({
    extended:true
}));

app.listen(3500,function(){
    debug(3500);
})