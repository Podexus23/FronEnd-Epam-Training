class Calculator {
  constructor() {
    this.settings = {
      mode: 'integer',
      priority: false,
    }
    this.first = 0;
    this.second = 0;
    this.operations = {
      '+': () => this.first + this.second,
      '-': () => this.first - this.second,
      '*': () => this.first * this.second,
      '/': () => this.first / this.second,
    }
    this.memory = [];
  }

  count(string) {
    let [numbers, symbols] = this.parse(string); //return [[Array=numbers] [Array=symbols]]
    let arrCounter = 0
    let sum = numbers.reduce((acc, num) => {
      this.first = Number(acc);
      this.second = Number(num);
      let demoSum = this.operations[symbols[arrCounter]]();
      arrCounter++
      return demoSum
    })
    return sum
  }

  parse(string) {
    const isNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numbersArr = [];
    let symbolArr = [];
    let char = '';

    for (let i = 0; i < string.length; i++) {
      if (isNumbers.includes(Number(string[i]))) {
        if (!isNumbers.includes(Number(string[i - 1]))) {
          char = string[i];
        } else {
          char += string[i];
        }
      }

      if (Object.keys(this.operations).includes(string[i])) {
        if (char) {
          numbersArr.push(char);
          char = '';
        }
        if (Object.keys(this.operations).includes(string[i - 1])) {

        } else symbolArr.push(string[i]);
      }

      if (string.length - 1 == i) {
        if (char) {
          numbersArr.push(char);
        }
      }
    }
    return [numbersArr, symbolArr]
  }

  printOnDisplay() {
    const numbers = document.querySelector('.numbers')
    const display = document.querySelector('.main-display')
    numbers.addEventListener('click', (event) => {
      if (event.target == numbers) {
        return
      } else if (display.textContent == 0) {
        display.textContent = event.target.innerText;
      } else if (event.target.innerText == '=') {
        this.memory.push([display.textContent, this.count(display.textContent)])
        display.textContent = this.count(display.textContent)
        this.showingMemory()
      } else {
        display.textContent += event.target.innerText;
      }
    })
  }

  cleanDisplay() {
    const cleaner = document.querySelector('.cleaner-button');
    const display = document.querySelector('.main-display')
    cleaner.addEventListener('click', () => {
      display.textContent = 0
    })
  }

  showingMemory() {
    const memo = document.querySelector('.memory-display');
    memo.textContent = this.memory.map(([ex, sum]) => {
      return `${ex} = ${sum}`
    }).join(', ')
  }

  workInProgress() {
    this.modeChanger()
    if (this.settings.mode == 'integer') {
      console.log(`mode ${this.settings.mode} activated`)
      this.printOnDisplay();
      this.cleanDisplay();
    }
    if (this.settings.mode == 'float') {
      console.log(`mode ${this.settings.mode} activated`)
      this.printOnDisplay();
      this.cleanDisplay();
    }
  }

  modeChanger() {
    const form = document.querySelector('.integrity')

    form.addEventListener('click', (event) => {
      if (event.target.id == 'float') {
        this.settings.mode = 'float';
      } else if (event.target.id == 'integer') {
        this.settings.mode = 'integer';
      }
    })
  }
}

let calc = new Calculator();
calc.workInProgress();