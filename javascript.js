const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    while(container.firstChild) 
        container.removeChild(container.firstChild); //clean preavious canvas
    pixelsPerSide = prompt("How many pixels on each side?");
    while (pixelsPerSide < 1 || pixelsPerSide > 100){
        alert("Number must be between 1 and 100");
        pixelsPerSide = prompt("How many pixels on each side?");
    }    
    for (let i = 0; i < pixelsPerSide; i++){
        const rowcont = document.createElement("div")
        rowcont.classList.add("rowcont");
        container.appendChild(rowcont)
        for (let j = 0; j < pixelsPerSide; j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel")
            rowcont.appendChild(pixel);
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
            });
        }    
    }
});
