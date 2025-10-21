// quizgame functionality

const displayChoices = (arr)=> {
    let result

    if (arr.length === 0) {
        return
    } else {
        let num = Math.floor(Math.random() * arr.length)

        result = arr.splice(num, 1)[0]

    }
    return result
}


module.exports = { 
    displayChoices
}