
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

 drawTree(500,500)
 drawMountain( 300,300)
 drawHouse(600,600)


 function drawTree(x,y){//function for drawing basic trees
     ctx.fillStyle = "green"
     ctx.beginPath();
     ctx.moveTo(x,y);
     ctx.lineTo(x-50,y+50)
     ctx.lineTo(x-20,y+50)
     ctx.lineTo(x-20,y+180)
     ctx.lineTo(x+20,y+180)
     ctx.lineTo(x+20,y+50)
     ctx.lineTo(x+50,y+50)
     ctx.lineTo(x,y)
     ctx.fill()
 }


 function drawMountain(x,y){//function to draw some basic mountains
    ctx.fillStyle= "gray"
    ctx.beginPath()
    ctx.moveTo(x,y);
    ctx.lineTo(x+150,y-150)
    ctx.lineTo(x+250,y)
    ctx.lineTo(x+300,y-100)
    ctx.lineTo(x+350,y)
    ctx.lineTo(x,y)
    ctx.fill();
 }

 function drawHouse(x,y){
     ctx.fillStyle = "red"
     ctx.beginPath()
     ctx.moveTo(x,y)
     ctx.lineTo(x-150,y+150)
     ctx.lineTo(x-150,y+300)
     ctx.lineTo(x+150,y+300)
     ctx.lineTo(x+150,y+150)
     ctx.lineTo(x,y)
     ctx.fill()
    
     ctx.fillStyle = "brown"
     ctx.beginPath()
     ctx.moveTo(x-25,y+300)
     ctx.lineTo(x-25,y+200)
     ctx.lineTo(x+25,y+200)
     ctx.lineTo(x+25,y+300)
     ctx.lineTo(x-25,y+300)
     ctx.fill()

     drawWindow(x-100,y+200)
     drawWindow(x+100,y+200)
     drawWindow(x,y+100)
 }


 function drawWindow(x,y){
     ctx.fillStyle = "lightblue"
     ctx.beginPath()
     ctx.moveTo(x,y)
     ctx.lineTo(x-25,y)
     ctx.lineTo(x-25,y+50)
     ctx.lineTo(x+25,y+50)
     ctx.lineTo(x+25,y)
     ctx.lineTo(x,y)
     ctx.fill()
 }
