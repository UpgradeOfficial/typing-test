const mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
   register_on: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("User", UserSchema)