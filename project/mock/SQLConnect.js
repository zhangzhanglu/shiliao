const mysql = require("mysql");
const MySQLObj = {
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
}

const client = mysql.createConnection(MySQLObj);

function SQLConnect(sql,arr,callback){
    client.query(sql,arr,(error,result) =>{
        if(error){
            console.log(error);
            return;
        }
        callback(result);
    })
}

module.exports = SQLConnect