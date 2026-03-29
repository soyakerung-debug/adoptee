const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: String,
    age: String,
    type: String,   // dog / cat
    breed: String,
    image: String,
    description: String
}, { timestamps: true });

module.exports = mongoose.model("Pet", petSchema);
