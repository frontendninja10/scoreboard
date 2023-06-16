let homeScore = 0
let guestScore = 0
let homeScoreElement = document.getElementById("home-score")
let guestScoreElement = document.getElementById("guest-score")

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreElement.textContent = homeScore
    console.log(homeScoreElement.textContent)
}
function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreElement.textContent = homeScore
    console.log(homeScoreElement.textContent)
}
function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreElement.textContent = homeScore
    console.log(homeScoreElement.textContent)
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreElement.textContent = guestScore
    console.log(guestScoreElement.textContent)
}
function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreElement.textContent = guestScore
    console.log(guestScoreElement.textContent)
}
function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreElement.textContent = guestScore
    console.log(guestScoreElement.textContent)
}

function newGame() {
    guestScore = 0
    homeScore = 0
    guestScoreElement.textContent = guestScore
    homeScoreElement.textContent = homeScore
}