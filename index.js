// window.addEventListener('keydown',run);

// function run(e){
// const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
// if(!audio) return; 

// audio.play();

// }
	const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
console.log  (member.fullName);