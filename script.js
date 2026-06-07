const container = document.querySelector("#container");


function createDivs(numberOfDivs){    
    for (i = 0; i < numberOfDivs; i++){
    const div = document.createElement("div")
    div.classList = "grid"
    container.appendChild(div)    
    }
}    

createDivs(256)

const selectedDivs = container.childNodes;

selectedDivs.forEach((div) => {

    div.addEventListener("mouseenter", (event) => {
        div.style.backgroundColor = "blue";
    })

    div.addEventListener("mouseleave", (event) => {
        div.style.backgroundColor = "white"
    })
}
)
