const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["dog", "cat"] // restrict values
    },
    breed: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "" // optional image URL
    },
    description: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = mongoose.model("Pet", petSchema);