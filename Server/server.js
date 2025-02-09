express = require('express');
eobj = express();
port = 5100;

eobj.listen(port, function(req,res){
    console.log("The Server is started succesfully");
})

//For handling CORS error
eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:4200");

    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with, Content-Type, Accept");

    next();
});

eobj.get('/',getFunc);

function getFunc(req,res){
    res.send("The Server is ON");
}

eobj.get('/getBatches',getBatches);

function getBatches(req,res){
    res.json({"batch":"Python","Fees":25000,"Duration":"3.5 months"});
}