const express = require('express')
const router = express.Router()

const fetch =(...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))

// localhost:3000/characters
//http://localhost:3000/characters
router.get('/', (req, res)=> {

    // do stuff
    const url = 'https://api.sampleapis.com/futurama/characters'

    // check and see what we got here...
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            res.render('pages/characters', {
                title: 'Characters',
                name: 'Our list of characters',
                data // data: data
            })
        })
})

router.get('/:id', (req, res)=> {

    const id = req.params.id

    const url = `https://api.sampleapis.com/futurama/characters/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const randomSaying = data.sayings[Math.floor(Math.random() * data.sayings.length)]

            res.render('pages/singleCharacter', {
                title: `${data.name.first}`,
                name: `${data.name.first}`,
                character: `${data.name.first} ${data.name.last}`,
                data,
                randomSaying
            })
        })
})

module.exports = router 