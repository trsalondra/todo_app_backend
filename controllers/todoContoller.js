const Todo = require('../models/todoModel')
const mongoose = require('mongoose')

// get all todos
const getTodos = async (req, res) => {
    const todos = await Todo.find({}).sort({ createdAt: -1 })
    res.status(200).json(todos)
}


// get form to create new todo


// delete a todo
const deleteTodo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such todo' })
    }

    const todo = await Todo.findOneAndDelete({ _id: id })

    if (!todo) {
        res.status(404).json({ error: 'No such todo' })
    }

    res.status(200).json(todo)
}



// put/update a todo
const updateTodo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such todo' })
    }

    const todo = await Todo.findByIdAndUpdate({ _id: id }, {...req.body})

    if(!todo) {
        res.status(404).json({error: 'No such todo'})
    }

    res.status(200).json(todo)

}


// post/create a todo
const createTodo = async (req, res) => {
    const { title, dueDate, description } = req.body 

    // add doc to db
    try {
        const todo = await Todo.create({ title, dueDate, description })
        res.status(200).json(todo)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


// get form to edit a todo


// get a todo
const getTodo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such todo' })
    }

    const todo = await Todo.findById(id)

    if (!todo) {
        res.status(404).json({ error: 'No such todo' })
    } else {
        res.status(200).json(todo)
    }
}

module.exports = {
    getTodos,
    deleteTodo,
    updateTodo,
    createTodo,
    getTodo
}