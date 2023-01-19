const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Todo', todoSchema)
// the model is how we interact with the collection in the db