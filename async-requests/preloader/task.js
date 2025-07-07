let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.setRequestHeader("Accept", "application/json");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    try {
      const data = JSON.parse(xhr.response);

      const itemsContainer = document.getElementById("items");
      const valutes = data.response.Valute;

      const loader = document.querySelector(".loader");
      loader.classList.remove("loader_active");

      for (let key in valutes) {
        itemsContainer.insertAdjacentHTML(
          "beforeend",
          `
            <div class="item">
              <div class="item__code">
                  ${valutes[key].CharCode}
              </div>
              <div class="item__value">
                  ${valutes[key].Value}
              </div>
              <div class="item__currency">
                  руб.
              </div>
            </div>
          `
        );
      }
    } catch (error) {
      console.error("Ошибка парсинга JSON:", error);
    }
  } else {
    console.error("Ошибка", xhr.status, xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Ошибка сети");
};

xhr.send();