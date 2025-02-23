//modal variables
const openModalAddBooks = document.querySelector(".add")
const openModalRemoveBooks = document.querySelector(".remove")
const formAddBooks = document.querySelector("#adBookForm")
const formRemoveBooks = document.querySelector("#removeBooksForm")
const modalAddBooks = document.querySelector("#modalAdd")
const modalRemoveBooks = document.querySelector("#modalRemove")
const closeModalAddBooks = document.querySelector(".addBooksSubmit")
const closeModalRemoveBooks = document.querySelector(".removeBooksSubmit")


//functions for opening and closing the modals
openModalAddBooks.addEventListener("click", () => {
    modalAddBooks.showModal()
})

openModalRemoveBooks.addEventListener("click", () => {
    modalRemoveBooks.showModal()
})

closeModalAddBooks.addEventListener("click", (e) => {
    
    if(formAddBooks.checkValidity()){
        e.preventDefault()
        modalAddBooks.close()
    }

})

closeModalRemoveBooks.addEventListener("click", (e) => {
    
    if(formRemoveBooks.checkValidity()){
        e.preventDefault()
        modalRemoveBooks.close()
    }

})

modalAddBooks.addEventListener("click", (e) => {
    const modalDimensions = modalAddBooks.getBoundingClientRect()
    if(
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom 
      ) {
        modalAddBooks.close()
    }
})

modalRemoveBooks.addEventListener("click", (e) => {
    const modalDimensions = modalRemoveBooks.getBoundingClientRect()
    if(
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom 
      ) {
        modalRemoveBooks.close()
    }
})

