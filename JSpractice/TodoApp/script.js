const button = document.getElementById("submit");
const input = document.getElementById("input");
var list = document.getElementById("list");
// const task = document.getElementById("input").value;

function addTodo() {
  const task = input.value;
  const li = document.createElement("li");
  li.innerHTML = task;
  list.appendChild(li);
  input.value = "";
}
