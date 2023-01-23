const express = require('express')
const router = express.Router()
// Module syntax here is 'common JS' as opposed to ES2015 which we use in front end
const { getGoals, deleteGoal, updateGoal, setGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

//* Above is same as:
// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)


module.exports = router