// console.log("complete part 1 before Zoahr prayer on 1-5-2023");

const express = require("express")
const dotenv = require("dotenv")
// const port = 5000   we are adding this in environment variable of root
const port = process.env.Port || 5000 
const app = express()

app.use('/api/goals', require('./routes/goalRoute')) // go to this whenever user wennt to /api/goals/ and follow routes there

app.listen(port, () => {
    console.log(`bro hearing u at port ${port}`);
})  