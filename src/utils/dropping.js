const mongoose = require("mongoose");
const { dbConnect, dbDisconnect } = require("../functions/dbFunctions");

async function dbDrop(){
    await mongoose.connect("mongodb://127.0.0.1:27017/pokeview-backend0").then(await mongoose.connection.dropCollection(`pokemondatas`))
    // dbConnect();
    // deletes all data from db/collection
    // Dont put this in production
    console.log("Dropping is done, disconnecting from the database");
    // Disconnects the database so as not to leave it hanging open after operations have completed
    await dbDisconnect();
}

dbDrop();