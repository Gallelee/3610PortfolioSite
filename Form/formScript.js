const nameText = document.getElementById("name");
const bgColor = document.getElementById("backgroundColor");
const textColor = document.getElementById("textColor");
const textSize = document.getElementById("textSize");
const font = document.getElementsByName("font")

textColor.addEventListener("change",(ev)=>{
    nameText.setAttribute("style", `color: ${ev.target.value}`)
})

bgColor.addEventListener("change", (ev)=>{
    document.body.setAttribute("style", `background-color: ${ev.target.value}`)
})

textSize.addEventListener("change", (ev)=>{
    nameText.setAttribute("style", `font-size: ${ev.target.value}px`)
})

font.forEach((elm)=>{
    elm.addEventListener("change", (ev)=>{
        nameText.setAttribute("style",`font-family: ${ev.target.value}`)
    })
})
