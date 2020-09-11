var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Hello World</p></body></html>");
    res.end();
  }
});

server.listen(8080);
