const express = require("express")
const path = require("path");

const app = express();

const tasks = [
    {
        "id":"1",
        "isCompleted":false,
        "description":"Walk the dog",
    },
    {
        "id":"2",
        "isCompleted":true,
        "description":"Eat",
    },
    {
        "id":"3",
        "isCompleted":false,
        "description":"Running in the backyard",
    }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(3000, () => {
    console.log("Server running on port", 3000);
});