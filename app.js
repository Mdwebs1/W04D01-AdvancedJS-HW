let http = require('http');
let fs = require('fs');
const file = require('./student.js')
console.log(file.student('amjad'))
require('./triangle.js')
require('./square.js')


    //Open a file on the server and return its content:
    
//     fs.writeFile('file.txt', `
//     <h1> my name is Masha Aldossari </h1>

//     `, function(err) {
//      if (err) throw err
//      console.log('created')
//     });
 
//     fs.readFile('file.txt', function(err, data) {
//      res.writeHead(200, {'Content-Type': 'text/html'});
//      res.write(data);
//      return res.end();
//    });
let data = { name: 'Masha', age:26 }
http.createServer(function (req, res) {
//Open a file on the server and return its content:
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}).listen(3000);
 
 