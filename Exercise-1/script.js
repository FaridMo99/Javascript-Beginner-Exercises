//close pop up, show second pop up and add name
const closeModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")
const form = document.querySelector(".form")
const playerAmountForm = document.querySelector(".playerAmount")
const onePlayer = document.querySelector("#one")
const twoPlayers = document.getElementById("two")
const opponentNameDiv = document.querySelector(".opponentName")
const buttonAmountOpponents = document.querySelector(".opp")


function isFormValid(a) {
    return a.checkValidity();
}

closeModal.addEventListener('click', (e) => {
    e.preventDefault()

    if (isFormValid(form)) {
        modal.style.display = 'none';
        playerAmountForm.classList.toggle("secondHidden")
    } 

    else {
        alert("Missing Username")
    }
})

playerAmountForm.addEventListener("click", (e) => {


    if(e.target.type === "radio"){

    if(isFormValid(onePlayer) && !opponentNameDiv.classList.contains("thirdHidden")) {
        opponentNameDiv.classList.add("thirdHidden")
    }

    else if (isFormValid(twoPlayers) && opponentNameDiv.classList.contains("thirdHidden")) {
        opponentNameDiv.classList.remove("thirdHidden")
    }

}
})

buttonAmountOpponents.addEventListener("click", (e) => {
    e.preventDefault()

    if(isFormValid(onePlayer)) {
        playerAmountForm.classList.toggle("secondHidden")
    }

    else if(isFormValid(twoPlayers) && isFormValid()) {
        playerAmountForm.classList.toggle("secondHidden")
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
    //name input
    //choosing how many rounds between 1/3/5
        //scoreBoard when more than one round
    //playing against computer
    //reset Button
    //popUp when game over with button wanna play again?
    //function for 2 players or against computer