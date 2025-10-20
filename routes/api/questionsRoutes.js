const router = require('express').Router()

const fetch =(...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))

// http://localhost:3000/questions
router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/futurama/questions'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            let question = {}

            const getQuestion =()=> {

                if (data.length == 0) {
                    return
                } else {
                    let num = Math.floor(Math.random() * data.length)

                    question = data.splice(num, 1)[0]
                }

                console.log(question)
                return question
            }

            getQuestion()

            res.render('pages/questions', {
                title: 'Futurama Quiz',
                name: 'Futurama Quiz',
                question,
                data
            })
        })
})

module.exports = router