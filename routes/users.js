const express = require('express')
// make a mini instance of app - independent from main instance
const router = express.Router()

// router works just like app
// we'll nest this router in '/users' route in main app so don't need
// to include that here
router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('New User Form')
})

// export router for use in main app
module.exports = router

// hmm