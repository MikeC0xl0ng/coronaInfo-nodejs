var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var pname = url.parse(req.url, true).pathname;
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(pname == "/coronainfo"){
    fs.readFile('./coronainfo.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! Percorso sbagliato!');
        } else {
            res.write(data);
        }
        res.end();
    });
  }else{
    res.end('Search for /coronainfo');
  }
}).listen(3000);