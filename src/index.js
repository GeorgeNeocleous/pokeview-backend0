// destructuring syntax - exported as an object
const {app} = require("./server.js");

// imports dotenv and calls the config function
require("dotenv").config();

// console.log(dotEnvironment);

const PORT = process.env.PORT || 8080;

// Tells the app to start listening to visitors on the specified port
app.listen(PORT, (err) => {

    if (err) {
        console.log("Error in server setup");
    }
    console.log("Server is running on port: " + PORT);
    
});

// Not sure if this will work
