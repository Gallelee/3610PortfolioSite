
const canvas = /** @type {HTMLCanvasElement} */(document.getElementById("myCanvas")); //type casting so that i get help with intellisense

const ctx = canvas.getContext("2d");
 ctx.fillStyle = "#e67300"
 //making the central sun
 ctx.beginPath() 
 ctx.arc(900,500,200,0,Math.PI*2)
 ctx.fill()

//making the curved skyline
 ctx.beginPath()
 ctx.fillStyle = "lightblue"
 ctx.moveTo(0,400)
 ctx.arcTo(900,100,1920,400,3000)
 ctx.lineTo(1920,0)
 ctx.lineTo(0,0)
 ctx.lineTo(0,400)
 ctx.fill()
