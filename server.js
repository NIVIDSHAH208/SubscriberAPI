require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// replace localhost with 127.0.0.1
// using environment variable
mongoose.connect(process.env.DATABASE_URl, { useNewUrlParser: true })
var db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => {
    console.log("Server has started on port 3000")
})