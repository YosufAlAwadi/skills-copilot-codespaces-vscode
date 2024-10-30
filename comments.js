// Create web server

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var querystring = require('querystring');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  // console.log(request.url);
  var url_parts = url.parse(request.url);
  // console.log(url_parts);
  var query = querystring.parse(url_parts.query);
  console.log(query);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to
