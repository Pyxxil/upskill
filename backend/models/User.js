const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: Number,
        default: 0
    },
    bio: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("users", userSchema);