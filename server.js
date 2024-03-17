const http = require("http");

const PORT = 8082;

const toDoList = ["Hello!", "this is just a", "Database"];

const server = http.createServer((req,res) =>{
    const {method, url} = req;

    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            // res.statusCode(200);
            res.write(toDoList.toString());
        }else if(method === "POST"){
            let task = "";
            req.on('error', err => {
                console.log(err);
            }).on('data', (chunck) => {
                task += chunck;
            }).on('end', () => {
                body = JSON.parse(body);
                let newTodo = toDoList;
                newTodo.push(body.item);
                console.log(newTodo);
            })
        }else if(method === "DELETE"){

        }
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write("Welcome!");
       
    }
    res.end();
});

server.listen(PORT, () => {
    console.log(`Node.js server is up amnd running on Port: ${PORT}`);
    // or use console.log("Node.js server is up and running on Port:", PORT);
});
