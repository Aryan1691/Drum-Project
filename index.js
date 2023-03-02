window.addEventListener('keydown',run);

function run(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
if(!audio) return; 

audio.play();

}