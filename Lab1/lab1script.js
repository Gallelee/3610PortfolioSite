const ctx = /** @type {HTMLCanvasElement} */ (
  document.getElementById("myCanvasLab1")
).getContext("2d");

const fruit = [
  { name: "Strawberry", quantity: 15, color: "red" },
  { name: "Peach", quantity: 10, color: "orange" },
  { name: "Banana", quantity: 25, color: "yellow" },
  { name: "Pear", quantity: 10, color: "green" },
  { name: "Grape", quantity: 20, color: "purple" },
];
function labelBar(name,x,y){
    ctx.font = "48px serif"
    ctx.fillText(name,x,y)
}

function drawBar(x,y,color){
    ctx.beginPath()
    ctx.moveTo(x,500)
    ctx.fillStyle = color;
    ctx.lineTo(x,500-y*5)
    ctx.lineTo(x+100,500-y*5)//scaling the y axis for better viewability
    ctx.lineTo(x+100,500)
    ctx.lineTo(x,500)
    ctx.fill()
}

let x = 0;

fruit.forEach(elm => {
    drawBar(x,elm.quantity, elm.color)
    x+=100
})

