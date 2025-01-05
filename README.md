# Node.js Server Crash Under Heavy Load Due to Large Requests

This repository demonstrates an uncommon Node.js bug where the server crashes or becomes unresponsive under heavy load due to inconsistent handling of large requests.  This is not a typical beginner error and typically shows up only in high-traffic scenarios.

## Bug Description
The server, as written in `bug.js`, lacks proper handling for large request bodies. When it encounters a request with a large body size, it might consume excessive memory leading to crashes or slowdowns.

## Solution
The solution, shown in `bugSolution.js`, utilizes streams to handle large requests efficiently, preventing memory exhaustion.  This approach makes the server more robust and able to handle a high volume of requests, even those with large payloads.