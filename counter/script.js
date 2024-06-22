
const decreaseBtn = document.getElementBYId("decreaseBtn");
const resetBtn = document.getElementBYId("resetBtn");
const increaseBtn = document.getElementBYId("increaseBtn");
const countLabel = document.getElementBYId("countLabel");
let count = 0;

increaseBtn.onclick = () =>{
  count++;
  countLabel.textContent = count;
}

decreaseBtn.onclick = () =>{
  count--;
  countLabel.textContent = count;
}

resetBtn.onclick = () =>{
  count = 0;
  countLabel.textContent = count;
}