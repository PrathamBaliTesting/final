// Load the built-in 'http' module
const http = require('http');

// Define a hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a HTTP server and handle requests
const server = http.createServer((req, res) => {
  // Set the HTTP header with a status code of 200 (OK) and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write a response to the client
  res.end('Hello, World!\n');
});

// Start the server and listen on the defined port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
