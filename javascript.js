const container = document.querySelector(".container");
let pixelsPerSide = 20;
createCanvas(pixelsPerSide);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    pixelsPerSide = +prompt("How many pixels on each side?");
    if (isNaN(pixelsPerSide) || pixelsPerSide < 1 || pixelsPerSide > 100){
        alert("Number must be between 1 and 100");
    }    
    else {
        while (container.firstChild) 
            container.removeChild(container.firstChild); //clean preavious canvas
        createCanvas(pixelsPerSide);
    }
});

function createCanvas(numberOfPixelsPerSide){
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
}
