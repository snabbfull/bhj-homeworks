let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.setRequestHeader("Accept", "application/json");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    try {
      const data = JSON.parse(xhr.response);

      const pollTitle = document.getElementById("poll__title");
      const pollAnswers = document.getElementById("poll__answers");
      const answers = data.data.answers;
      const title = data.data.title;

      pollTitle.textContent = title;

      for (let value of answers) {
        pollAnswers.insertAdjacentHTML(
          "beforeend",
          `
            <button class="poll__answer">
              ${value}
            </button>
            `
        );
      }
      const btn = document.querySelectorAll("button");

      btn.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          alert("Спасибо, ваш голос засчитан!");
        });
      });
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
