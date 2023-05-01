const asyncHandler = require('express-async-handler')// package error handler replacement of try catch

// description = get goals
// route = Get /
// access private
const getGoal = asyncHandler(async (req, res) => {
    res.status(200).json({messgae: "get or Read goal"})
})

const setGoal = asyncHandler(async (req, res) => {
    // console.log(req.body); // getting result after adding line 9,10 in server.js as middleware
    // now if data is not there in post request give error
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field in postman')
    }
    res.status(200).json({"messgae": "set or Create goal"})
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({"messgae": `Update goal for ${req.params.id}`})
})
    
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({"messgae": `Delete goal from ${req.params.id}`})
})

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };