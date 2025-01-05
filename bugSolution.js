const http = require('http');
const stream = require('stream');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);

  // Use a stream to handle large request bodies
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString(); // Handle chunks of data
    //Check chunk size to prevent memory issues
  });

  request.on('end', () => {
    if(body.length > 1024*1024) { //handle large requests
      response.end(JSON.stringify({message: 'Request body too large'}));
      return;
    }
    response.end(JSON.stringify({ message: 'Hello from Node.js!', body: body }));
  });
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});