var fs = require('fs')

fs.readFile('client.js','utf-8',function(err,data)
    {
        console.log("Readfile client.js")
        console.log(data)
    })

fs.writeFile('Calc1.js','console.log("done")',function(err)
    {
        console.log("Data Saved")
    })

fs.appendFile('calc.js','console.log("This is the write from filesystem.js")',function(err)
    {
            console.log("Data Appended in calc.js")
    })

fs.unlink('Calc1.js',function(err){
    console.log("File deleted --> Calc1.js")
    console.log("Error = " + err)
})