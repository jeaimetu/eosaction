console.log("other data");
    loadData(ctx, function(id){
       ctx.session.id = id;
    eos.getTableRows({code : "eosadddddddd",
                 scope: ctx.session.id,
                 table: "accounts",
                 }).then(result => {
     console.log(result);
     console.log(result[0]);
     console.log(result[0].rows);
     console.log(result.rows);
     console.log(result.rows[0]);
     var msg = "token balance is " + result.rows[0].balance;
     ctx.telegram.sendMessage(ctx.from.id, msg)
    }).catch((err)=>{
     var msg = "토큰 잔고 조회 실패";
     ctx.telegram.sendMessage(ctx.from.id, msg)
    });
    });
