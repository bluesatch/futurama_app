const handleClick =(el)=> {
    let answerchoice = el.getAttribute('data-option')
    console.log(answerchoice)
}

const quizOptions = document.querySelectorAll('.quiz-options')

quizOptions.forEach(option => {
    option.addEventListener('click', ()=> {
        handleClick(option)
    })
})