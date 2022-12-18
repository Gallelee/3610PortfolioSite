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
recognition.continuous = false;

const colors = ["color blue","color red","color yellow","color green","color purple","color black"]
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')};`
const recogList = new webkitSpeechGrammarList();
recogList.addFromString(grammar,1)

recognition.grammars = recogList
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

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
    stop.style.display = "none"
    speak.style.display = "block"
}

recognition.onresult = (ev) => {
    const response = ev.results[0][0].transcript
    let responseType = response.split(" ")
    if(responseType[0] === "color" ){
        ctx.fillStyle = responseType[1]
        ctx.fill()
    }
    else if(responseType[0] === "size"){
        if(parseInt(responseType[1]) < 300 || parseInt(responseType[1])>1){
        ctx.arc(300,300,parseInt(responseType[1]),0,Math.PI*2,true)
        ctx.fill()
        }
    }
    
}