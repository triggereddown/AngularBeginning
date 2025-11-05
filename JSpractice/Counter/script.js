let value = document.getElementById("value");
const increasebtn = document.getElementById("inc-btn");
const decreasebtn = document.getElementById("dec-btn");
const resetbtn = document.getElementById("reset-btn");

function increase() {
  value = value + 1;
  document.getElementById("value").innerHTML = value;
}

function decrease() {
  if (value > 0) {
    value = value - 1;
    document.getElementById("value").innerHTML = value;
  }
}
function reset() {
  value = 0;
  document.getElementById("value").innerHTML = value;
}

increasebtn.addEventListener("click", increase);
