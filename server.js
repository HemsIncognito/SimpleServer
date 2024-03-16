const http = require("node:http");

const PORT = 8081;

const server = http.createServer((res,req) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Welcome!</h1>");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Node.js server is up amnd running on Port: ${PORT}`);
    // or use console.log("Node.js server is up amnd running on Port:", PORT);
});
