const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeRemaining = document.querySelector('#time-remaining')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 3
timeRemaining.textContent = currentTime
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == hitPosition) {
            result++
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
        alert("Time's up! Your final score: " + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)