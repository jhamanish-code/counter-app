const display = document.getElementById('display');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById("reset");

let count = 0;

incBtn.addEventListener("click", ()=>{
  count++;
  updateDisplay();
});

decBtn.addEventListener("click",()=>{
  
    count --;
  
  
  updateDisplay();
  
});
resetBtn.addEventListener("click",()=>{
  count=0;
  updateDisplay();
});
function updateDisplay(){
  display.textContent = count;
}