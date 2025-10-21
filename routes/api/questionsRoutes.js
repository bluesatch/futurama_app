const router = require('express').Router()
const { displayChoices, handleClick }  = require('../../helpers/quiz')

const fetch =(...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))

// http://localhost:3000/questions
router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/futurama/questions'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            let question = {}

            question = displayChoices(data)
            console.log(question)

            res.render('pages/questions', {
                title: 'Futurama Quiz',
                name: 'Futurama Quiz',
                question,
                data,
                handleClick
            })
        })
})

module.exports = router