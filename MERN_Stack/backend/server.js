// console.log("complete part 1 before Zoahr prayer on 1-5-2023");

const express = require("express")
const dotenv = require("dotenv")
const { errorHandler } = require("./Middleware/errorMiddleware")
// const port = 5000   we are adding this in environment variable of root
const port = process.env.Port || 5000 
const app = express()

// to get api's functional and working like getting post data from postman etc
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/goals', require('./routes/goalRoute')) // go to this whenever user wennt to /api/goals/ and follow routes there

app.use(errorHandler) // our own created error handler for specific requirements of err in json and clearly defined


app.listen(port, () => {
    console.log(`bro hearing u at port ${port}`);
})  