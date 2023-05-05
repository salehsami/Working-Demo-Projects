const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId, // this all will add a user who create the goal
            requried: true,
            ref: 'User'
        },
        // employee: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     unique: true
        // },
        text: {
            type: String,
            requried: [true, "Doll, It's mandatory to fill this up dear"]
        },
    },
    {
        timestamps: true //add the added and deleted time automatically
    },
)
module.exports = mongoose.model('Goals', goalSchema);