Eos = require('eosjs') // Eos = require('./src')

var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;

 
eosConfig = {
httpEndpoint: "http://mainnet.eoscalgary.io"
}

async function getFirstUser() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}

async function getAddBalance(){
 let bal = await eos.getTableRows({json : true,
                      code : "eosadddddddd",
                 scope: "gyydoojzgige",
                 table: "accounts",
                 });
 return bal.rows[0].balance;
}

async function getTokenBalance(cb){
 let [addBalance, dacBalance] = await Promise.all([getAddBalance(), getDacBalance()]);
console.log(addBalance, dacBalance);
 msg = addBalance;
 msg += "\n";
 msg += dacBalance;
 console.log(Date.now());
 cb(msg);
 return msg;
}
 

async function getDacBalance(){
 let bal = await eos.getTableRows({json : true,
                      code : "eosdactokens",
                 scope: "gyydoojzgige",
                 table: "accounts",
                 });
 return bal.rows[0].balance;
}


 
eos = Eos(eosConfig) // 127.0.0.1:8888

console.log(Date.now());

getTokenBalance((result)=>{console.log(result)});
