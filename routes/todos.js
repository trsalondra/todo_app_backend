const express = require('express')
const {
    getTodos,
    deleteTodo,
    updateTodo,
    createTodo,
    getTodo
} = require('../controllers/todoContoller')

const router = express.Router()

// INDEX
router.get('/', getTodos)

// NEW form
router.get('/new', (req, res) => {
    res.json({ mssg: "GET form to create todo" })
})

// DELETE
router.delete('/:id', deleteTodo)

// UPDATE
router.put('/:id', updateTodo)

// CREATE
router.post('/', createTodo)

// EDIT form
router.get('/:id/edit', (req, res) => {
    res.json({ mssg: "GET edit form to update a todo" })
})

// SHOW
router.get('/:id', getTodo)

module.exports = router