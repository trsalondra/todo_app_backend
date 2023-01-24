require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todosRoutes = require('./routes/todos')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())

app.use(cors({ origin: '*' })) 

// routes
app.use('/todos', todosRoutes)

app.get("/", (req, res) => {
    res.json({ mssg: "Welcome" })
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db and listening on port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })

