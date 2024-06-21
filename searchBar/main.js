const element1 = document.getElementById("inputBox");
const element2 = document.getElementById("searchBox");

element1.addEventListener("focus", () => {
  element2.style.height = "410px";
});
element1.addEventListener("blur", () => {
  element2.style.height = "50px";
});