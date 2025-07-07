document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const fileInput = document.getElementById("file");
  const progress = document.querySelector("progress");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
      alert("Выберите файл.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

    xhr.upload.addEventListener("progress", function (event) {
      if (event.lengthComputable) {
        progress.value = event.loaded / event.total;
      }
    });

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Успешная загрузка", xhr.response);
      } else {
        console.error("Ошибка загрузки", xhr.status, xhr.response);
      }
    };

    xhr.onerror = function () {
      console.error("Ошибка сети");
    };

    xhr.send(formData);
  });
});
