const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
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