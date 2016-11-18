var container = document.getElementById("container");
var next = document.getElementById("login");
var prev = document.getElementById("signup");

next.onclick = function(event) {
  event.preventDefault();
  container.classList.add("login");
}

prev.onclick = function(event) {
  event.preventDefault();
  container.classList.remove("signup");
}