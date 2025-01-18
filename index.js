let homeScore = 0, guestScore = 0

function add1home() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function add2home() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}

function add3home() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}


function add1guest() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

function add2guest() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

function add3guest() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

function reset(){
    homeScore = 0
    document.getElementById("home-score").textContent = homeScore
    guestScore = 0
    document.getElementById("guest-score").textContent = guestScore
}