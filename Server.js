var http = require('http')

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("Hello!! Jai Sai ram")
    res.end()
}).listen(8080)