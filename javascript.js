const container = document.querySelector(".container");
for (let i = 0; i < 16; i++){
    const rowcont = document.createElement("div")
    rowcont.classList.add("rowcont");
    container.appendChild(rowcont)
    for (let j = 0; j < 16; j++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel")
        rowcont.appendChild(pixel);
    }    
}
