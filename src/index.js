// imports dotenv and calls the config function
require("dotenv").config();

// destructuring syntax - exported as an object
const { dbConnect } = require("./functions/dbFunctions.js");
const {app} = require("./server.js");



// console.log(dotEnvironment);

const PORT = process.env.PORT || 8080;

// Tells the app to start listening to visitors on the specified port
app.listen(PORT, async () => {
    await dbConnect();
    console.log("Server is running on port: " + PORT);
});

