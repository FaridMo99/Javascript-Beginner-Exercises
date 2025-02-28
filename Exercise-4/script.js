let modal = document.querySelector("header")
let modalButton = document.querySelector(".enterGridSizeBtn")
let rows30 = document.querySelectorAll(".rows30")
let rows40 = document.querySelectorAll(".rows40")

//modal closing and gridSize 

modalButton.addEventListener("click", (e) => {
    let gridSize = document.querySelector("input[type='radio']:checked")
    e.preventDefault();
    modal.classList.toggle("hidden");

    if (gridSize.value === "30"){
        nodeListToArrayAndLoop(rows30, "remove")
    }

    else if (gridSize.value === "40") {
        nodeListToArrayAndLoop(rows30, "remove")
        nodeListToArrayAndLoop(rows40, "remove")

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
    //randomized symbols under cards => make function and add to eventlistener modalButton
        //when small take 10 svgs, clone and place randomly inside cells, medium 15, large 20

    //if all cards right  add to score you won and firework animation
    //restart and change grid button
        //restart keeps grid but deletes everythign else
        //change grid deletes everything