let num1 = document.getElementById("no1");
let num2 =document.getElementById("no2");
let para = document.getElementById("para");


function add(){
  sum = num1.value +num2.value;
  para.textContent += sum;
}

function subtract(){
  sub = num1-num2;
  para.textContent += sub;
}

function multiply(){
  mult = num1*num2;
  para.textContent += mult;
}

function divide(){
  div = num1/num2;
  para.textContent += div;
}
