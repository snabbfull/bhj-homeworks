let counter = 59;

const decriseTimer = function () {
  //Передаем в элемент значение счетчика
  document.getElementById("timer").textContent = counter;

  //Проверяем окончание отсчета, останавливаем интервал, выводим всплывающее сообщение, прекращаем вызов функции
  if (counter === 0) {
    clearInterval(intervalId);

    setTimeout(() => {
      alert("Вы победили в конкурсе!");
    }, 100);

    return;
  }

  //Уменьшаем значение счетчика
  counter--;
};

//Первый вызов функции (для исключения задержки обратного отсчета)
decriseTimer();

//Определяем константу с ID интервала и вызов интервала функции
const intervalId = setInterval(decriseTimer, 1000);
