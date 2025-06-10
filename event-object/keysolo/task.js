class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.counterElement = container.querySelector(".status__counter");

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.stopTimer();
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  decreaseCounterElement() {
    const currentCount = Number(this.counterElement.textContent);
    const newCount = currentCount - 1;
    this.counterElement.textContent = newCount;
    if (newCount < 0) {
      this.fail();
    }
  }

  startTimer() {
    this.stopTimer();
    this.timerId = setInterval(() => {
      this.decreaseCounterElement();
    }, 1000);
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  registerEvents() {
    document.addEventListener("keyup", (event) => {
      const key = event.key;
      if (key.length === 1 && key.match(/[a-z]/i)) {
        const pressedKey = key.toLowerCase();
        const currentText = this.currentSymbol.textContent;

        if (currentText === pressedKey) {
          this.success();
        } else {
          this.fail();
        }
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current"))
      this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add("symbol_current");
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    this.stopTimer();
    const word = this.getWord();

    this.renderWord(word);
    this.startTimer();
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
    this.counterElement.textContent = word.length;
  }
}

new Game(document.getElementById("game"));
