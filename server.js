require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers.js')
app.use('/subscribers', subscribersRouter)


app.listen(3001, () => console.log('Server has started'))