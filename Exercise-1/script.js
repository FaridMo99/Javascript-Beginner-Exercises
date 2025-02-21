//close pop up and add name and symbol
const closeModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")
const form = document.querySelector(".form")

function isFormValid() {
    return form.checkValidity();
}

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    if (isFormValid()) {
        /*form.submit();  reloads the page so after learning to sve changes removing comments*/ 
        
        modal.style.display = 'none';
    } 
})

// Tic tac toe game
//features to implement
    //choosing your symbol
    //name input
    //choosing how many rounds between 1/3/5
        //scoreBoard when more than one round
    //playing against computer
    //reset Button
    //popUp when game over with button wanna play again?