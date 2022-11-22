const red = document.getElementById("redSquare")
const orange = document.getElementById("orangeSquare")
const yellow = document.getElementById("yellowSquare")
const purple = document.getElementById("purpleSquare")
const blue = document.getElementById("blueSquare")

const piano = document.getElementById("piano")
const metal = document.getElementById("metal")
const cinematic = document.getElementById("cinematic")
const geo = document.getElementById("geo")
const anti = document.getElementById("anti")

red.addEventListener("dblclick", ()=>{
    piano.play()
})
red.addEventListener("click", ()=>{
    piano.pause()
})


orange.addEventListener("dblclick", ()=>{
    metal.play()
})
orange.addEventListener("click", ()=>{
    metal.pause()
})


yellow.addEventListener("dblclick", ()=>{
    cinematic.play()
})
yellow.addEventListener("click", ()=>{
    cinematic.pause()
})


purple.addEventListener("dblclick", ()=>{
    geo.play()
})
purple.addEventListener("click", ()=>{
    geo.pause()
})



blue.addEventListener("dblclick", ()=>{
    anti.play()
})
blue.addEventListener("click", ()=>{
    anti.pause()
})

