const mongoose = require("mongoose")

const Schema = mongoose.Schema


const QouteSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("Qoute", QouteSchema)