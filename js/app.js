const form = document.querySelector("form");
const send = document.querySelector("article");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  send.classList.add("show");
});
