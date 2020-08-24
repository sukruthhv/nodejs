var express = require('express')

var app = express()

app.get("/",function(req,res){
    console.log("Get the / root called")
    res.send('Hello World!!!')
})

app.get("/shv",function(req,res){
    res.send('Hello Sukruth!!!')
})
/* Always remember that in nodejs, which is server side programming, we are trying to act as a server and 
hence any response would be from server and req would be from the client like browser*/

app.get('/shv/:id',function(req,res){
    var id = req.params.id

    if (id == 21)
    {
        res.send('Hey Sukruth ' + id)
    }
    else
    {
        res.send('Hey Arpitha ' + id)
    }
    
})

app.listen(9000, function(req,res){
    console.log("Server Running!!!!")
})


