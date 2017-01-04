var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.get('/',function (req,res){
    res.send("TESTING");
})
app.listen(3000);
console.log("server running on port 3000");