const mongoose = require("mongoose");
const { dbConnect, dbDisconnect } = require("../functions/dbFunctions");

// This drops the whole database
// 
async function dbDrop(){
    await dbConnect().then(await mongoose.connection.dropDatabase(`pokeview-backend0`))
    // Dont put this in production
    console.log("Dropping is done, disconnecting from the database");
    // Disconnects the database so as not to leave it hanging open after operations have completed
    await dbDisconnect();
}

dbDrop();