const express = require('express')
const { getGoal, updateGoal, setGoal, deleteGoal } = require('../controller/goalController')
const router = express.Router()

// app.get('/api/goals', (req, res) => {
//     res.send("from getting goals end")
// }) // working
//  now if we wanna try it in json format

// changes '/api/routes/ to '/' cuz when it come from  server.js to here it will be the home or main
// router.get('/', (req, res) => {
//     res.status(200).json({"messgae": "get or Read goal"})
// }) // still working boy

// now we are just calling  things from other files like controller and thaey have main functionality implemented in them
// router.get('/', getGoal)

// // similarly with all routes shifting to controller

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

// // now we can do a little minimization of code by due to similarization of the routes

const {protect} = require('../middleware/authMiddleware')// brought in routes protection or authorization


router.route('/').get(protect, getGoal).post(protect, setGoal)

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router