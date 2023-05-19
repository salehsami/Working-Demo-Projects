const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../model/userModel")

// @description = register user
// @route = post api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
  
    if (!name || !email || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({ email })
 
    if (userExists) {
        res.status(400)
        throw new Error("User Exists already")
    }

    // hashing the  password so even couldn't be seen in mongo database
    const salt = await bcrypt.genSalt(10)
    
    const hashedPassword = await bcrypt.hash(password, salt)
    
    //user creation
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    // if user exists show this on screen
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
        })
    }

    else {
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

// description = Authenticate user
// route = post api/users/login
// access private
const loginUser = asyncHandler(async (req, res) => {
    
    // get email and password from body
    const { email, password } = req.body
    

    // find by email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            // password:hashedPassword,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)

            // pin: hashedPassword
        })
    }
    else {
        res.status(400)
        throw new Error("User don't exists")
    }
})

// description = get user data
// route = get api/users/me
// access private
const getMe = asyncHandler(async(req, res) => {
    // const user = User.find()
    // res.status(200).json("user data is getting") // now we will use real data istead this
    const { _id, name, email, password } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
        password // can also give this but i think we have neglected the password but meh! whatever
    })
})

//jwt token generation
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_Secret, {
        expiresIn: '30d'
    })
}

module.exports = { registerUser, loginUser, getMe }