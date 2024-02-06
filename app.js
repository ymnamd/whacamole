const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeRemaining = document.querySelector('#time-remaining')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 30
timeRemaining.textContent = currentTime
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
        square.classList.remove('unicorn')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    let chance = Math.random()
    if (chance<0.5) {
        randomSquare.classList.add('mole')
        hitPosition = randomSquare.id
    }
    else {
        randomSquare.classList.add('unicorn')
        hitPosition = randomSquare.id
    }
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if ((square.id == hitPosition) && (square.classList.contains('mole'))) {
            result++
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
        else if ((square.id == hitPosition) && (square.classList.contains('unicorn'))) {
            result--
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeRemaining.textContent = currentTime
    if (currentTime == -1) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        timeRemaining.textContent = 0
        if (result <= -1) {
            result = 0
            score.textContent = result
        }
        alert("Time's up! Your final score: " + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)