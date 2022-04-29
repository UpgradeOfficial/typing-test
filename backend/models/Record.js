const mongoose = require("mongoose")

const Schema = mongoose.Schema


const RecordSchema = Schema({
    qoute: {
        type: Schema.Types.ObjectId,
        ref: "Qoute"
    },
    duration: {
        type: Number,
        require: true
    },
    start: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("Record", QouteSchema)