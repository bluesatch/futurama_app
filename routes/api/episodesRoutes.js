const router = require('express').Router()

const fetch =(...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))

// http://localhost:3000/episodes

router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/futurama/episodes'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/episodes', {
                title: 'Futurama Episodes',
                name: 'Good News Everyone!! Here are some episodes!',
                episodes: data
            })
        })
})

router.get('/:id', (req, res)=> {

    const id = req.params.id

    const url = `https://api.sampleapis.com/futurama/episodes/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            res.render('pages/singleEpisode', {
                title: data.title,
                name: data.title,
                data
            })
        })
})

module.exports = router
