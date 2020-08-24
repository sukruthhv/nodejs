var calc = require('./Server_calc.js')

result = calc.add(2,3)

result_sub = calc.sub(4,3)

console.log("The result of addition = " + result)

console.log("The result of subtraction = " + result_sub)

var http = require('http')

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("The results of addition is  " + result_sub)
    res.end()
}).listen(8080)