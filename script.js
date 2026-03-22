let historyDiv = document.getElementById("History");
let colorText = document.getElementById("colorCode");

function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = "#";

    for(let i = 0; i < 6; i++){

      color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

function randomColor(){
    let color = getRandomColor();

    document.body.style.background = color;
    colorText.innerText = color;

    addToHistory(color);
}

function gradientColor(){
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    document.body.style.background = `linear-gradient(45deg,${color1},${color2})`
    colorText.innerText = color1 + " -> " + color2;
}

function copyColor(){
    navigator.clipboard.writeText(colorText.innerText);
    alert("copied")
}


function addToHistory(color){
    let box = document.createElement("div")
    box.classList.add("color-box")
    box.style.background = color;

    box.onclick = () => {
        document.body.style.background = color;
        colorText.innerText = color;
    }
    historyDiv.appendChild(box);
}

function toggleMode(){
    document.body.classList.toggle("dark")
}