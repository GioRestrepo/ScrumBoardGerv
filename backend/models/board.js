const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageURL: String,
    status: String,
    date: Date,  
});


const board = mongoose.model("Board", boardSchema);

module.exports = board; 