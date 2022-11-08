const mongoose = require("mongoose");

const dbConnection = async ()  =>  {
      try {
         await mongoose.connect(process.env.BD_CONNECTION)
         console.log("Connection with MongoDB is OK");
      } catch (er) {
         console.log("Error connecting with mongodb", er);
         throw new Error("Error connecting with mongodb")
      }
}

module.exports = {dbConnection}; 