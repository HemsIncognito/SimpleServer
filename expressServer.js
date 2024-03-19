const express = require("express")

const app = express();

app.use(express.json()); 

const PORT = 8081;

const toDoList = ["Hello", "this is just a", "Database"];

app.get('/todos', (req,res) => {
    res.status(200).send(toDoList);
});

app.post('/todos', (req, res) => {
    let bodyItem = req.body.item;
    toDoList.push(bodyItem); //We have a custom db in the file so we push it here itself
    res.status(201).send({ 
        message: "Task added Successfully"
    });
});

app.delete('/todos', (req, res) => {
    const deleteItem = req.body.item;
    toDoList.find((each, i) => {
        if(each === deleteItem){
            toDoList.splice(i,1);
        }
    })
    res.status(200).send({ 
        message: "Task Deleted"
    })
})

app.all('/todos', (req,res) => {
    res.status(501).send()
})

app.all('*', (req,res) => {
    res.status(404).send({message: "Request not found!"})
})

app.listen(PORT, () => {
    console.log(`Node.js server is up amnd running on Port: ${PORT}`);
});