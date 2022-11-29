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

red.addEventListener("click", ()=>{
    piano.play()
})
red.addEventListener("dblclick", ()=>{
    piano.pause()
})


orange.addEventListener("click", ()=>{
    metal.play()
})
orange.addEventListener("dblclick", ()=>{
    metal.pause()
})


yellow.addEventListener("click", ()=>{
    cinematic.play()
})
yellow.addEventListener("dblclick", ()=>{
    cinematic.pause()
})


purple.addEventListener("click", ()=>{
    geo.play()
})
purple.addEventListener("dblclick", ()=>{
    geo.pause()
})



blue.addEventListener("click", ()=>{
    anti.play()
})
blue.addEventListener("dblclick", ()=>{
    anti.pause()
})

