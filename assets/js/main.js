console.log("Entro al archivo JS");
const body = document.querySelector("body");


function btnChangeColor(){
    setTimeout(changeColor, 5000);
    // setInterval(changeColor, 3000);
    console.log("FINAL")
    // changeColor();
}

function changeColor(){
    const randomColor = Math.floor(Math.random() *16777215).toString(16);
    // console.log("Mi número aleatorio es: " + randomColor);
    body.style.backgroundColor = `#${randomColor}`;
}