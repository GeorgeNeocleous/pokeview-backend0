const express = require("express");

const app = express();

// Allows the server to 
app.use(express.json());


app.get("/", (request, response) => {
    response.json({
        message:"Hello, world"
    });
});

module.exports = {
    app
}