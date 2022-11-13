const canvas = /** @type {HTMLCanvasElement} */(document.getElementById("myCanvas")); //type casting so that i get help with intellisense
const ctx = canvas.getContext('2d');
const speak = document.getElementById("speakButton")
const listen = document.getElementById("listen")
const stop = document.getElementById("stopButton")
ctx.beginPath()
ctx.fillStyle = "black"
ctx.arc(300,300,25,0,Math.PI*2,true)
ctx.fill();

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;

speak.addEventListener('click', ()=>{
    recognition.start();
    speak.style.display = "none"
    stop.style.display = "block"
})

stop.addEventListener('click', ()=>{
    recognition.stop()
    speak.style.display="block"
    stop.style.display="none"
})

recognition.onstart = ()=>{
    console.log("started")
    listen.style.display = "block"
}

recognition.onend = ()=>{
    listen.style.display = "none"
    console.log("Stopped")
}