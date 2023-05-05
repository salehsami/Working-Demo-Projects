const asyncHandler = require("express-async-handler")
const Mongoose = require("mongoose")
const User = require("../model/userModel")

// description = register user
// route = post api/users
// access public
const registerUser = (req, res) => {
    // const user = User.find()
    res.status(200).json("user is Registering")
}

// description = Authenticate user
// route = post api/users/login
// access private
const loginUser = (req, res) => {
    // const user = User.find()
    res.status(200).json("user is Authenticating")
}

// description = get user data
// route = get api/users/me
// access private
const getMe = (req, res) => {
    // const user = User.find()
    res.status(200).json("user data is getting")
}


module.exports = {registerUser, loginUser, getMe}