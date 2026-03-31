const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
    petName: String,
    name: String,
    email: String,
    phone: String,
    message: String
}, { timestamps: true });

module.exports = mongoose.model("Adoption", adoptionSchema);