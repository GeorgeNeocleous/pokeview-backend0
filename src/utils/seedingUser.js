const { mongoose } = require("mongoose");
const { dbConnect, dbDisconnect } = require("../functions/dbFunctions");
const { User } = require("../models/userModel");

async function seedDatabaseUser(){
    dbConnect();
    const newUser = new User({
        username: "user1",
        password: "Coolpassword101"
    });
    console.log("Creating new user: user1");
    
    await newUser.save();
    dbDisconnect();
    // function to write in a new user
    // mongoose.connection.close();
};

seedDatabaseUser();