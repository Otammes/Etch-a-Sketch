const container = document.querySelector("#container");


function multiplyDivs(){
    
    for (i = 0; i <257; i++){
    const div = document.createElement("div")
    container.appendChild(div)    
    }
    
}

multiplyDivs()