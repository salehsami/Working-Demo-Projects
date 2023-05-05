// console.log("complete part 1 before Zoahr prayer on 1-5-2023");
const express = require("express")
const colors = require('colors')
// const dotenv = require("dotenv"); // not getting read 
const { errorHandler } = require("./Middleware/errorMiddleware")
const connectDB = require("./config/db")
require('dotenv').config({ path: './.env'})


// const port = 5000   we are adding this in environment variable of root
const port = process.env.Port || 5000 
const app = express()

console.log(connectDB());
// to get api's functional and working like getting post data from postman etc
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/goals', require('./routes/goalRoute')) // go to this whenever user wennt to /api/goals/ and follow routes there
app.use('/api/users', require('./routes/userRoute'))
app.use(errorHandler) // our own created error handler for specific requirements of err in json and clearly defined


app.listen(port, () => {
    console.log(`bro hearing u at port ${port}`);
})  