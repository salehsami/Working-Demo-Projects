const asyncHandler = require('express-async-handler')// package error handler replacement of try catch
const { Mongoose } = require('mongoose')
const Goal = require('../model/goalModel')
const User = require('../model/userModel')

// description = get goals
// route = Get /
// access private
const getGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.find({user:req.user.id})
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
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error("Goal not found")
    }

    const user = await User.findById(req.user.id)

    // checking for user existence
    if (!user) {
        res.status(401)
        throw new Error("User Not Found")
    }

    // matching with logged in user so to update only those who has access to
    if (goal.user.toString() != user.id) {
        res.status(401)
        throw new Error("User Not Authorized ")
    };

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})
    
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error("Goal not found")
    }

    const user = await User.findById(req.user.id)

    // checking for user existence
    if (!user) {
        res.status(401)
        throw new Error("User Not Found")
    }

    // matching with logged in user so to delete only those who has access to
    if (goal.user.toString() != user.id) {
        res.status(401)
        throw new Error("User Not Authorized ")
    }

    await Goal.findByIdAndRemove(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };