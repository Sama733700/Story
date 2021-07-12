//This loop increments the drums. So that the addEventListener is applied to all our buttons.
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i< numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);  });
    //This if-else thing is to implement sound to each drum.
    //The "this" allows you to compare them. It is basically the Identity of the object
      /*  switch(key){
          case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
          break;
          case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
          break;
          case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
          break;
          case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
          break;
          case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
          break;
          case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
          break;
          case "l";
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
          break;*/

  //   There is another way to do implement the sound.
}
// This part is for pressing the Keys
document.addEventListener("keydown",function(){
    makeSound(event.key);
  });

  function makeSound(key){
    if(this.innerHTML==="w"){
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    }else if(this.innerHTML==="a"){
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    }else if(this.innerHTML==="s"){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  }else if(this.innerHTML==="d"){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  }else if(this.innerHTML==="j"){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  }else if(this.innerHTML==="k"){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  }else if(this.innerHTML==="l"){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
  }

}
