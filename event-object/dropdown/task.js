const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdownValue = document.querySelector(".dropdown__value");

dropdownValue.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list_active");
});

for (let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener("click", function (e) {
    e.preventDefault();
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.remove("dropdown__list_active");
  }, false);
}
