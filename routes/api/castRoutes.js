const router = require('express').Router()

const fetch =(...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))

// http://localhost:3000/cast
router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/futurama/cast/'

    fetch(url)
        .then(res => res.json())
        .then(data => {

            res.render('pages/cast', {
                title: 'Cast Members',
                name: 'Cast Members',
                cast: data
            })
        })
})

router.get('/:id', (req, res)=> {

    const id = req.params.id

    const url = `https://api.sampleapis.com/futurama/cast/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {

            res.render('pages/singleCast', {
                title: data.name,
                name: data.name,
                data
            })
        })
})

module.exports = router