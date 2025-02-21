//close pop up, show second pop up and add name
const closeModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")
const form = document.querySelector(".form")
const playerAmountForm = document.querySelector(".playerAmount")
const onePlayer = document.querySelector("#one")
const twoPlayers = document.getElementById("two")
const opponentNameDiv = document.querySelector(".opponentName")
const buttonAmountOpponents = document.querySelector(".opp")
const playerSymbol = document.querySelector(".playerSymbol")
const opponentSymbol = document.querySelector(".opponentSymbol")
let opponentName = document.querySelector(".opponentNameInput")
let opponentNameInput = document.querySelector("#opponentName")
let playerNameInput = document.querySelector("#username")
let playerName = document.querySelector(".playerName")

function isFormValid(a) {
    return a.checkValidity();
}

closeModal.addEventListener('click', (e) => {
    e.preventDefault()

    if (isFormValid(form)) {
        modal.style.display = 'none';
        playerAmountForm.classList.toggle("secondHidden")
        playerName.innerHTML = playerNameInput.value
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

buttonAmountOpponents.addEventListener("click", (e) => {
    e.preventDefault()

    if(onePlayer.checked) {
        playerAmountForm.classList.toggle("secondHidden")
        opponentName.textContent = "Computer"
    }

    else if(twoPlayers.checked && opponentName !== undefined) {
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
    let yourSymbol = document.querySelector('input[name="symbol"]:checked').value;

    e.target.classList.remove("hover")
    e.target.innerHTML = `<img src="${yourSymbol}.svg" alt="${yourSymbol}">`;

    });
});

    //computer algorithm


//features to implement
    //choosing how many rounds between 1/3/5
        //scoreBoard when more than one round
    //playing against computer
    //reset Button
    //popUp when game over with button wanna play again?
    //function for 2 players or against computer

//bugs 
    //can proceed when choosing two players and having empty input
    