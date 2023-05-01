const express = require('express')
const router = express.Router()

// app.get('/api/goals', (req, res) => {
//     res.send("from getting goals end")
// }) // working
//  now if we wanna try it in json format

// changes '/api/routes/ to '/' cuz when it come from  server.js to here it will be the home or main
router.get('/', (req, res) => {
    res.status(200).json({"messgae": "get or Read goal"})
}) // still working boy

router.post('/', (req, res) => {
    res.status(200).json({"messgae": "set or Create goal"})
}) 

router.put('/:id', (req, res) => { // update specifc
    res.status(200).json({"messgae": `Update goal for ${req.params.id}`})
}) 

router.delete('/:id', (req, res) => { //delete from specific id
    res.status(200).json({"messgae": `Delete goal from ${req.params.id}`})
}) 

module.exports = router