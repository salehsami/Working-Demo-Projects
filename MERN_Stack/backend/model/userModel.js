const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique:true,
    },
    password: {
        type: String,
        required: [true, "Please add password"]
    },
},
    {
        timstamps:true // will add creation and updation time automatically
    }
)
module.exports = mongoose.model('User', userSchema)

// 9:27 pm