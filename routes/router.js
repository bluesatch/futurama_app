// handles top-level configuration FOR ROUTES
const express = require('express')
const router = express.Router()



router.use(express.static('public'))

// http://localhost:3000/
router.get('/', (req, res)=> {
    // do stuff
    // res.end('My Futurama App!')
    // .render(path => where are we rendering, obj => what we are rendering)
    res.render('pages/home', {
        title: 'My Futurama Home Page',
        name: "Satch's Futurama App!"
    })
})

// add questions, inventory
const endpoints = ['characters', 'cast', 'episodes', 'questions']

// router.use('/characters', require('./api/charactersRoutes'))
// router.use('/episodes', require('./api/episodesRoutes'))
// router.use('/cast', require('./api/castRoutes'))

endpoints.forEach(endpoint => {

    router.use(`/${endpoint}`, require(`./api/${endpoint}Routes`))
})

module.exports = router