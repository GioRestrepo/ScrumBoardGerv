const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: {type: Date, dafault: Date.now},
    bdStatus: Boolean,  
});


const role = mongoose.model("role", roleSchema);

module.exports = role; 