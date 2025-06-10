const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    tabs.forEach((element) => element.classList.remove("tab_active"));
    tabContents.forEach((element) => element.classList.remove("tab__content_active"));

    tab.classList.add("tab_active");
    tabContents[index].classList.add("tab__content_active");
  });
});
