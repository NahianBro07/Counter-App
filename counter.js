
const value = document.getElementById("value");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");
const btnIncrease = document.getElementById("btn-increase");

let count = 0;

btnDecrease.onclick = () => {
  if (count > 0) {
    count--;
    value.textContent = count;
  }

  value.textContent = count;
};

btnIncrease.onclick = () => {
  count++;
  value.textContent = count;
};

btnReset.onclick = () => {
  count = 0;
  value.textContent = count;
};
