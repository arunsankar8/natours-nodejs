const express = require('express');

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    
    const response = {
        statusCode: 200,
        message: "Hello from the server side"
    };
    res.status(404).json(response);
});

app.post('/', (req,res) => {
    res.status(200).send("Post is now available to post messages");
})
app.listen(PORT, () => {
    console.log("Server running");
})