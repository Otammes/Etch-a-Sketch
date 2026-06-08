const container = document.querySelector("#container");


function createDivs(numberOfDivs){    
    for (let i = 0; i < numberOfDivs; i++){
    const div = document.createElement("div")
    div.classList = "grid"
    const newWidth = 100 / Math.sqrt(numberOfDivs);
    div.style.flexBasis = `${newWidth}%`
    container.appendChild(div)
    div.addEventListener("mouseenter", (event) => {
    div.style.backgroundColor = "blue";
    })
}
}    

createDivs(256)



let userInput = 0;

const btn = document.querySelector("#btn")

btn.addEventListener("click", (event) => {
    const stringValue = prompt("How many numbers of squares do you want?");

    if (stringValue !== null && stringValue <= 100) {
        
        container.replaceChildren() 
        
        userInput = parseInt(stringValue);
        userInput *= userInput
        createDivs(userInput)
        }
    else {
        alert("Input can not be empty or above 100")
    }
})

