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
        formValues(formAddBooks)
        const formData = formValues(formAddBooks);
        addBookToLibrary(formData[0], formData[1], formData[2])
        e.preventDefault()
        modalAddBooks.close()
    }

})

closeModalRemoveBooks.addEventListener("click", (e) => {
    const formData = formValues(formRemoveBooks)
    
    if (formRemoveBooks.checkValidity() && myLibrary.some(book => book.title === formData[0]))
    {
        formValues(formRemoveBooks)
        removeBookFromLibrary(formData[0])
        e.preventDefault()
        modalRemoveBooks.close()
    }

    else {
        alert("Book does not exist")
        e.preventDefault()
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

//function to retrieve values from form

function formValues(form) {
    let textInputValues = Array.from(form.elements)
      .filter(element => element.type === "text" || element.type === "number")
      .map(element => element.value);
    
      return textInputValues
    }

//creating books and pushing into array

const myLibrary = [];

function Book(title, author, release) {
    this.title = title
    this.author = author
    this.release = release
}

function addBookToLibrary(title, author, release) {
    if (myLibrary.length >= 40) {
        alert("Max books reached! Cannot add more.");
        return;
    }
    
    const newBook = new Book(title, author, release);
    myLibrary.push(newBook);

    displayBooks();
}

function removeBookFromLibrary(title) {
    let index = myLibrary.findIndex(book => book.title === title);

    if (index !== -1) {
        myLibrary.splice(index, 1);
    }

    removeDisplayBooks(title);
}

// functions for looping through library array and displaying it
const rows = Array.from(document.querySelectorAll(".firstRow, .secondRow, .thirdRow, .fourthRow"));

function displayBooks() {
    rows.forEach(row => row.innerHTML = "");

    if (myLibrary.length > 40) {
        alert("Max books reached! Cannot add more.");
        return;
    }

    myLibrary.forEach((book, index) => {
        const button = document.createElement("button");
        button.setAttribute("class", "openBookInside");
        button.textContent = book.title;

        const dialog = document.createElement("dialog");
        dialog.setAttribute("class", "bookInside");
        dialog.innerHTML = `
            <div class="modal-content">
                <p>${book.author}</p>
                <p>${book.release}</p>
            </div>
        `;

        button.addEventListener("click", () => dialog.showModal());

        dialog.addEventListener("click", (e) => {
            if (!dialog.querySelector(".modal-content").contains(e.target)) {
                dialog.close();
            }
        });

        document.body.appendChild(dialog); 
        button.dataset.dialogId = book.title;

        const rowIndex = Math.floor(index / 10);
        if (rowIndex < rows.length) {
            rows[rowIndex].appendChild(button);
        }
    });
}

function removeDisplayBooks(title) {
    rows.forEach(row => {
        row.querySelectorAll("button").forEach(button => {
            if (button.textContent === title) {
                const dialog = document.querySelector(`dialog[data-dialog-id="${title}"]`);
                if (dialog) {
                    dialog.remove();
                }
                button.remove();
            }
        });
    });
}

function removeBookFromLibrary(title) {
    let index = myLibrary.findIndex(book => book.title === title);

    if (index !== -1) {
        myLibrary.splice(index, 1);
    }

    displayBooks();
}