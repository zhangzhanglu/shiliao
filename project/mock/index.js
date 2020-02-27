const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const router = require("./router")
var debug = require('debug')('my-application');
<<<<<<< HEAD
var cors = require('cors');
=======
const router = require("./router")
>>>>>>> ea37ef9ec1db9966985956d71c6f017321ce096d

app.use(cors());
// post请求获取参数的方案
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/",router);

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3300");
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

app.use("/",router);

app.use(express.static('static'));


app.listen(3500,function(){
    debug(3500);
})