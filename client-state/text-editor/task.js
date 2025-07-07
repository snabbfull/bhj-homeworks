const text = document.getElementById("editor");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  text.value = null;
  localStorage.removeItem("text");
});

const storedText = localStorage.getItem("text");
if (storedText) {
  text.value = storedText;
}

text.addEventListener("input", () => {
  localStorage.setItem("text", text.value);
});
