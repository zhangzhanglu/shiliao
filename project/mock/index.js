const express = require("express")
const app = express();
const bodyParser = require("body-parser")
var debug = require('debug')('my-application');
const router = require("./router")

// post请求数据方案
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use("/",router);

app.use(express.static('static'));


app.listen(3500,function(){
    debug(3500);
})