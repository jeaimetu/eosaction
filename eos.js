Eos = require('eosjs') // Eos = require('./src')

 
config = {
httpEndpoint: "http://mainnet.eoscalgary.io"
}
 
eos = Eos(config) // 127.0.0.1:8888

eos.getActions("gyydoojzgige").then(result => {
 console.log(result);
 console.log(result.actions[0]);
 console.log(result.actions[1]);
 console.log(result.actions);

            })

eos.getActions("eosio.token").then(result => {
 console.log(result);
});


return;

eos.getCurrencyBalance("eosio.token","gyydoojzgige").then(result => {console.log(result)})
//console.log('currency balance', balance);
eos.getAccount("gyydoojzgige").then(result => {
 console.log(result.self_delegated_bandwidth.net_weight, result.self_delegated_bandwidth.cpu_weight, result.voter_info.unstaking)
v1 = result.self_delegated_bandwidth.net_weight.split(" ");
 v2 = result.self_delegated_bandwidth.cpu_weight.split(" ");
 console.log(parseInt(v1[0],10) + parseInt(v2[0],10));
})



/*
bithumb.ticker('EOS').then(function(response){
  console.log(response.data)
})
*/

 
// All API methods print help when called with no-arguments.
eos.getBlock()
 
// Next, you're going to need nodeosd running on localhost:8888 (see ./docker)
 
// If a callback is not provided, a Promise is returned
eos.getBlock(1).then(result => {console.log(result)})
 
// Parameters can be sequential or an object
eos.getBlock({block_num_or_id: 1}).then(result => console.log(result))
 
// Callbacks are similar
callback = (err, res) => {err ? console.error(err) : console.log(res)}
eos.getBlock(1, callback)
eos.getBlock({block_num_or_id: 1}, callback)
 
// Provide an empty object or a callback if an API call has no arguments
eos.getInfo({}).then(result => {console.log(result)})

eos.getAccount("gyydoojzgige").then(result => {console.log(result)})


console.log("calling getAcion");
eos.getActions("gyydoojzgige", 1000, 0).then(result => {
 console.log(result)
 console.log(result.actions)
 eos.getBlock(5000, callback);
})
