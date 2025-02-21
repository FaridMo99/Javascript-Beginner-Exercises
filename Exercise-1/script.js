//close pop up, show second pop up and add name
const closeModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")
const form = document.querySelector(".form")
const playerAmountForm = document.querySelector(".playerAmount")
const onePlayer = document.querySelector("#one")
const twoPlayers = document.getElementById("two")
const opponentNameDiv = document.querySelector(".opponentName")
const submitButtonAmountOpponents = document.querySelector(".opp")
const playerSymbolDiv = document.querySelector(".playerSymbol")
const opponentSymbolDiv = document.querySelector(".opponentSymbol")
let opponentName = document.querySelector(".opponentNameInput")
let opponentNameInput = document.querySelector("#opponentName")
let playerNameInput = document.querySelector("#username")
let playerName = document.querySelector(".playerName")

function isFormValid(a) {
    return a.checkValidity();
}

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    let playerSymbol = document.querySelector("input[name='symbol']:checked").value
    let opponentSymbol = playerSymbol == "circle" ? "cross" : "circle"

    if (isFormValid(form)) {
        modal.style.display = 'none';
        playerAmountForm.classList.toggle("secondHidden")
        playerName.innerHTML = playerNameInput.value
        playerSymbolDiv.innerHTML = `<img src="${playerSymbol}.svg" alt="${playerSymbol}">`
        opponentSymbolDiv.innerHTML = `<img src="${opponentSymbol}.svg" alt="${opponentSymbol}">`
    } 

    else {
        alert("Missing Username")
    }
})

playerAmountForm.addEventListener("click", (e) => {


    if(e.target.type === "radio"){

    if(onePlayer.checked) {
        opponentNameDiv.classList.add("thirdHidden")
    }

    else if (twoPlayers.checked) {
        opponentNameDiv.classList.remove("thirdHidden")
    }

}
})

submitButtonAmountOpponents.addEventListener("click", (e) => {
    e.preventDefault()

    if(onePlayer.checked) {
        playerAmountForm.classList.toggle("secondHidden")
        opponentName.textContent = "Computer"
    }

    else if(twoPlayers.checked && opponentNameInput.value != "") {
        playerAmountForm.classList.toggle("secondHidden")
        opponentName.textContent = opponentNameInput.value
    }


    else {
        alert("Player 2 has to choose a Name")
    }
})


//playing Game

    //choosing your Symbol and playing with it
const squareArray = document.querySelectorAll(".sq")

squareArray.forEach(element => {

  element.addEventListener('click', (e) => {
    let playerSymbol = document.querySelector("input[name='symbol']:checked").value

    e.target.classList.remove("hover")
    e.target.innerHTML = `<img src="${playerSymbol}.svg" alt="${playerSymbol}">`;

    });
});

    //player 2 algorithm


    //computer algorithm



    //algorithm for game pattern when choosing 1 or 2 player
function playGame() {
    if (onePlayer) {

    }

    else if (twoPlayers) {

    }
}

    //restart button
const restartBtn = document.querySelector(".reset-btn")
const textInput = document.querySelectorAll("input[type='text']")

function restart() {
    modal.style.display = 'inherit';
    playerName.innerHTML = ""
    opponentName.innerHTML = ""
    playerSymbolDiv.innerHTML = ""
    opponentSymbolDiv.innerHTML = ""

    textInput.forEach((element) => {
        element.value = ""
    })
    squareArray.forEach((e) => {
        e.innerHTML = ""
    })

}

restartBtn.addEventListener("click", () => {
    restart();
})
    



//features to implement
    //playing against computer
    //popUp when game over with button wanna play again?


