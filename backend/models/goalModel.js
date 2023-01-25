const mongoose = require('mongoose')

// ref is referring to something else, not a reactive item
const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'please add a text value']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)