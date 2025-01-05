const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon Bug: Inconsistent handling of large requests.
//If the server receives requests with large bodies, it may lead to memory issues and unexpected behavior.
//This issue is uncommon because it only appears under heavy load or with unusually large requests.

//The above code doesn't explicitly handle large requests, which may cause the server to crash or become unresponsive.

//The issue is highlighted because it is not a typical beginner-level error and only manifests under specific, heavy-load conditions. Thus making it an uncommon error to encounter.
