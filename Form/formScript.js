const nameText = document.getElementById("name");
const bgColor = document.getElementById("backgroundColor");
const textColor = document.getElementById("textColor");
const textSize = document.getElementById("textSize");
const font = document.getElementById("font")

textColor.addEventListener("change",(ev)=>{
    nameText.setAttribute("style", `color: ${ev.target.value}`)
})

