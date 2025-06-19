const elements = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

function switchClass() {
  elements[currentIndex].classList.remove("rotator__case_active");

  currentIndex = (currentIndex + 1) % elements.length;

  elements[currentIndex].classList.add("rotator__case_active");
  elements[currentIndex].style.color = elements[currentIndex].dataset.color;

  setTimeout(switchClass, elements[currentIndex].dataset.speed);
}

switchClass();