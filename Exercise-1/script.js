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
let changeSymbol = 0

function playGame(e) {
    if(e.target.innerHTML !== ""){
        return;
    }

    let playerSymbol = document.querySelector("input[name='symbol']:checked").value
    let opponentSymbol = playerSymbol == "circle" ? "cross" : "circle"

    e.target.classList.remove("hover")

    if (changeSymbol % 2 == 0){
    e.target.innerHTML = `<img src="${playerSymbol}.svg" alt="${playerSymbol}">`;
    changeSymbol++
    }
 
    else if (changeSymbol % 2 != 0){
    e.target.innerHTML = `<img src="${opponentSymbol}.svg" alt="${opponentSymbol}">`
    changeSymbol++
    }
    e.target.removeEventListener("click", playGame);
   
    if (changeSymbol % 2 != 0 && onePlayer.checked) {
        squareArray.forEach(element => {
            element.style.pointerEvents = "none";
          });
          setTimeout(() => {
            squareArray.forEach(element => {
              element.style.pointerEvents = "";
            });
          }, 1000);
        
        setTimeout(computer, 1000);
    }

    if (gameOver()) return;

}

squareArray.forEach(element => {

  element.addEventListener('click', playGame);
});

    //computer algorithm
    function computer() {
        let playerSymbol = document.querySelector("input[name='symbol']:checked").value;
        let opponentSymbol = playerSymbol === "circle" ? "cross" : "circle";
    
        if (changeSymbol % 2 === 0 || gameOver()) { 
            return;
        }
    
        const emptySquares = Array.from(squareArray).filter(square => square.innerHTML === "");
    
        if (emptySquares.length === 0) {
            return;
        }
    
        const randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    
        randomSquare.innerHTML = `<img src="${opponentSymbol}.svg" alt="${opponentSymbol}">`;
        randomSquare.removeEventListener("click", playGame);
        randomSquare.classList.remove("hover");
        changeSymbol++;
    
        gameOver();
    }

    //algorithm for deciding winner
let winnerPopup = document.querySelector(".scoreboard")
let winnerText = document.querySelector(".winnerText")

function gameOver() {
    let playerSymbol = document.querySelector("input[name='symbol']:checked").value;
    let opponentSymbol = playerSymbol === "circle" ? "cross" : "circle";

    const squareNodelistAsArray = Array.from(squareArray);
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        let symbolA = squareNodelistAsArray[a].innerHTML.trim();
        let symbolB = squareNodelistAsArray[b].innerHTML.trim();
        let symbolC = squareNodelistAsArray[c].innerHTML.trim();

        if (symbolA !== "" && symbolA === symbolB && symbolB === symbolC) {
    
            let winnerName = symbolA.includes(playerSymbol) ? playerNameInput.value : opponentName.textContent;

            squareArray.forEach(square => {
                square.style.pointerEvents = "none";
            });


            combination.forEach(index => {
                squareNodelistAsArray[index].classList.add("big");
            });

        
            setTimeout(() => {
                winnerPopup.classList.remove("hidden");
                winnerText.textContent = `${winnerName} Won!`;
            }, 2000);

            return true;
        }
    }

    if ([...squareArray].every(square => square.innerHTML !== "")) {
        setTimeout(() => {
            winnerPopup.classList.remove("hidden");
            winnerText.textContent = "It's a draw!";
        }, 2000);
        return true;
    }

    return false;
}


    //restart button
const restartBtn = document.querySelector(".reset-btn")
const playAgainBtn = document.querySelector(".playAgainBtn")
const textInput = document.querySelectorAll("input[type='text']")

function restart() {
    modal.style.display = 'inherit';
    playerName.innerHTML = "";
    opponentName.innerHTML = "";
    playerSymbolDiv.innerHTML = "";
    opponentSymbolDiv.innerHTML = "";
    changeSymbol = 0;

    textInput.forEach((element) => {
        element.value = "";
    });

    squareArray.forEach((e) => {
        e.innerHTML = "";
        e.classList.add("hover");
        e.classList.remove("big");
        e.style.pointerEvents = "auto";
        e.addEventListener("click", playGame);
    });

    winnerPopup.classList.add("hidden");
    winnerText.textContent = "";
}

restartBtn.addEventListener("click", () => {
    restart();
})

playAgainBtn.addEventListener("click", () => {
    winnerPopup.classList.toggle("hidden")
    winnerText.textContent = ""
    restart();
})
    