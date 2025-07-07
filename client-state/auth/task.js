const form = document.getElementById("signin__form");
const signinBlock = document.getElementById("signin");
const welcomeBlock = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

const btn = document.createElement("button");
btn.textContent = "Выйти";
btn.className = "button";
btn.addEventListener("click", () => {
  localStorage.removeItem("user_id");
  signinBlock.classList.add("signin_active");
  welcomeBlock.classList.remove("welcome_active");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedUserId = localStorage.getItem("user_id");
  if (savedUserId) {
    showWelcome(savedUserId);
    welcomeBlock.appendChild(btn);
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.response);
        if (data.success) {
          localStorage.setItem("user_id", data.user_id);
          showWelcome(data.user_id);
          welcomeBlock.appendChild(btn);
        } else {
          alert("Неверный логин/пароль");
        }
      } catch (e) {
        alert("Ошибка обработки ответа сервера");
        console.error(e);
      }
    } else {
      alert("Ошибка запроса. Код: " + xhr.status);
    }
  };

  xhr.onerror = function () {
    alert("Ошибка сети");
  };

  xhr.send(formData);
});

function showWelcome(userId) {
  userIdSpan.textContent = userId;
  signinBlock.classList.remove("signin_active");
  welcomeBlock.classList.add("welcome_active");
}
