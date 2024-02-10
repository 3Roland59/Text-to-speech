// Variables
const btn = document.querySelector('.button')
const text = document.querySelector('textarea')
const speed = document.querySelector('.sped')
const inc = document.querySelector('.inc')
const dec = document.querySelector('.dec')

let sped = 1.0

inc.addEventListener('click', ()=>{
    sped += 0.1
    speed.innerHTML =  sped.toFixed(1)
})
dec.addEventListener('click', ()=>{
    sped -= 0.1
    speed.innerHTML =  sped.toFixed(1)
})

btn.addEventListener('click', ()=>{
    let utterance = new SpeechSynthesisUtterance(text.value)
    // console.log(utterance)
    // utterance.lang = 'french'
    utterance.rate = sped
    speechSynthesis.speak(utterance)
})