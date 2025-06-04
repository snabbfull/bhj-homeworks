let counter = 0;
let currentDate = new Date();

const coockie = document.getElementById("cookie");
const coockieClickCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
const resetButton = document.getElementById("reset__button");

coockie.addEventListener("click", () => {
  //Вычисляем скорость клика и передаем ее в элемент, а также обновляем текущее время клика
  let clickTime = new Date();
  let differenceDate = (clickTime.getTime() - currentDate.getTime()) / 1000;
  let speedCounter = 1 / differenceDate;
  currentDate = clickTime;
  clickerSpeed.textContent = speedCounter.toFixed(2);

  //Увеличиваем счетчик кликов и передаем его в элемент, а также меняем размер печенья
  counter++;
  coockieClickCounter.textContent = counter;
  if (counter % 2 === 0) {
    coockie.width = 200;
    return;
  }

  coockie.width = 400;
});

resetButton.addEventListener("click", () => {
  //Сбрасываем счетчик кликов, скорость и размер печенья
  counter = 0;
  coockieClickCounter.textContent = counter;
  clickerSpeed.textContent = "0.00";
  coockie.width = 200;

  //Обновляем текущее время клика
  currentDate = new Date();
});
