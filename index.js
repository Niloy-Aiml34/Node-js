// Import required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send a response message
    res.end('Hello, Node.js!\n');
});

// Set the port and hostname for the server
const PORT = 4000;
const HOSTNAME = 'localhost';

// Start the server
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
