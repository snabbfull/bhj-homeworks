let winCounter = 0;
let loseCounter = 0;

const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

// Функция для получения лунок по ID
function getHole(index) {
  return document.getElementById(`hole${index}`);
}

// Функция для проверки проигрыша
const loseChecker = () => {
  if (loseCounter === 5) {
    alert("Проигрыш( Повезет в другой раз!");
    winCounter = 0;
    loseCounter = 0;

    lostCounter.textContent = loseCounter;
    deadCounter.textContent = winCounter;
  }
};

// Функция для проверки победы
const winChecker = () => {
  if (winCounter === 10) {
    alert("Победа!");

    winCounter = 0;
    loseCounter = 0;

    lostCounter.textContent = loseCounter;
    deadCounter.textContent = winCounter;
  }
};

// Добавляем обработчики событий для каждой лунки
for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.addEventListener("click", () => {
    if (hole.className.includes("hole_has-mole")) {
      winCounter++;
      deadCounter.textContent = winCounter;
    } else {
      loseCounter++;
      lostCounter.textContent = loseCounter;
    }

    winChecker();
    loseChecker();
  });
}
