const popup = document.getElementById("subscribe-modal");
const closeButton = document.querySelector(".modal__close");

closeButton.addEventListener("click", () => {
  popup.classList.remove("modal_active");
  document.cookie = "popupClosed=true";
});

function showPopup() {
  if (!document.cookie.includes("popupClosed")) {
    popup.classList.add("modal_active");
  }
}

window.onload = showPopup;

