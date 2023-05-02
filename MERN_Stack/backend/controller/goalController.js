const asyncHandler = require('express-async-handler')// package error handler replacement of try catch
const { Mongoose } = require('mongoose')
const Goal = require('../model/goalModel')

// description = get goals
// route = Get /
// access private
const getGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.find()
    res.status(200).json(goal)
})

const setGoal = asyncHandler(async (req, res) => {
    // console.log(req.body); // getting result after adding line 9,10 in server.js as middleware
    // now if data is not there in post request give error
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field in postman')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({"messgae": `Update goal for ${req.params.id}`})
})
    
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({"messgae": `Delete goal from ${req.params.id}`})
})

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };