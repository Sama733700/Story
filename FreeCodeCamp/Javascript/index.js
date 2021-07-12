let content = 0;

let text = document.getElementById("text");

let texts = document.getElementById("para");

function increment(){
  content += 1;
  text.innerText=content;
}

function save(){
  countStr = content + " - ";
  texts.textContent += countStr;
  content = 0;
  text.textContent = 0;
}
