const express = require('express')
const router = express.Router()
// Module syntax here is 'common JS' as opposed to ES2015 which we use in front end
const { getGoals, deleteGoal, updateGoal, setGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

//* Above is same as:
// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)


module.exports = router