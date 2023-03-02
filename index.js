window.addEventListener('keydown',run);

function run(e){
    //keyCode will get the code of the exact key
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//if there is no audio in a key then we will simply return
if(!audio) return; 

//if there is a audio then we will play
audio.play();
//if press continuously then it will play in 0 seconds
audio.currentTime = 0;
key.classList.add('playing');


}
const kk = document.querySelectorAll(`.key`);

kk.forEach((element) => {
    //when the transition ends which is ease-in-out 0.7ms then remove the playing 
    element.addEventListener('transitionend',remove);
});

function remove(k){
if(k.propertyName="transform"){
    this.classList.remove('playing');
}else{
    return;
}
}