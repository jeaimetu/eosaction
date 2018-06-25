Eos = require('eosjs') // Eos = require('./src')

var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;

 
eosConfig = {
httpEndpoint: "http://mainnet.eoscalgary.io"
}
 
eos = Eos(eosConfig) // 127.0.0.1:8888

console.log("other data");

    eos.getTableRows({code : "eosadddddddd",
                 scope: "gyydoojzgige",
                 table: "accounts",
                 }).then(result => {
     console.log(result);
     console.log(result[0]);
     console.log(result[0].rows);
     console.log(result.rows);
     console.log(result.rows[0]);
     var msg = "token balance is " + result.rows[0].balance;
     console.log(msg);
    }).catch((err)=>{
console.log("balance check fail");
    });

