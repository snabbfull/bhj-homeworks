const reveal = document.querySelectorAll(".reveal");

function isVisible(el) {
  const top = el.getBoundingClientRect().top;
  const bottom = el.getBoundingClientRect().bottom;

  if (bottom >= 0 && top <= window.innerHeight) {
    el.classList.add("reveal_active");
  } else {
    el.classList.remove("reveal_active");
  }
}

window.addEventListener("scroll", () => {
  reveal.forEach((el) => {
    isVisible(el);
  });
});
