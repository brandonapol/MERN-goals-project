const asyncHandler = require('express-async-handler')
// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get goals' })
})

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }

    res.status(200).json({ message: 'Set goals' })
})

// @desc    Update Goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${ req.params.id }` })
})

// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${ req.params.id }` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}