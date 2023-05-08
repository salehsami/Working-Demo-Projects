const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //save token from headers
            //if it is present and 
            //with bearer on its start cuz bearer tooken is like Bearer 15678  
            //so we have to get it in next stage
            token = req.headers.authorization.split(' ')[1]

            //verifying the token and save it
            const decoded = jwt.verify(token, process.env.JWT_Secret)
            
            // now use that bloody token to get info from our authorized or protected routes or access that hidden route
            req.user = await User.findById(decoded.id).select('-password') // will find user by given id or name whatever user added in it and remove password from the output cuz thats not what can be accessed even when u have accees to that route

            next()// always call it when dealing with middleware 

        }
        catch (error) {
            console.log(error);
            res.status(401)
            throw new Error("User Not Authorized")
        }
    }
    if (!token) {
        res.status(401)
        throw new Error("No Token")
    }
})
module.exports = {protect}