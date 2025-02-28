let modal = document.querySelector("header")
let modalButton = document.querySelector(".enterGridSizeBtn")
let rows30 = document.querySelectorAll(".rows30")
let rows40 = document.querySelectorAll(".rows40")
let memoryPicturesAll = document.querySelectorAll("img")

//modal closing and gridSize 

modalButton.addEventListener("click", (e) => {
    let gridSize = document.querySelector("input[type='radio']:checked")
    e.preventDefault();
    modal.classList.toggle("hidden");

    if (gridSize.value === "20") {
        cutAndDupedArray(10)
    }

    else if (gridSize.value === "30"){
        nodeListToArrayAndLoop(rows30, "remove")
        cutAndDupedArray(5)
    }

    else if (gridSize.value === "40") {
        nodeListToArrayAndLoop(rows30, "remove")
        nodeListToArrayAndLoop(rows40, "remove")
        cutAndDupedArray(0)

    }
})

function nodeListToArrayAndLoop(list, loopAction){
    let arr = Array.from(list)

    arr.forEach(element => {
        if(loopAction === "remove") {
        element.classList[loopAction]('hidden');
        }

    })
}

//features 
    //counter for right combinations/missing combinations
    //flipping cards
        //first card stays flipped 
            // if second card matches then both cards removed and add one to points

    //if all cards right  add to score you won and firework animation
    //restart and change grid button
        //restart keeps grid but deletes everything else
        //change grid deletes everything

let allCells = Array.from(document.querySelectorAll(".cells"))
let svgs = Array.from(document.querySelectorAll("img"))


allCells.forEach(element => {
    element.addEventListener("click", (e) => {
        e.target.style.visibility = "hidden"
        e.target.style.pointerEvents = "none"
        svgs.style.visibility = "visible"

    })
})

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));        
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function cutAndDupedArray(lengthToCut) {
    let randomizedArray = shuffleArray(svgs);
    randomizedArray.splice(0, lengthToCut)
    randomizedArray.forEach(item => {
        dupedArray.push(item, item);
        return dupedArray
    })
}

function placeSvg() {

}