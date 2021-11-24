class Calculator {
  constructor() {
    this.first = 0;
    this.second = 0;
    this.operations = {
      '+': () => this.first + this.second,
      '-': () => this.first - this.second,
      '*': () => this.first * this.second,
      '/': () => this.first / this.second,
    }
  }

  count(string) {
    let [numbers, symbols] = this.parse(string); //return [[Array=numbers] [Array=symbols]]
    let arrCounter = 0
    let summ = numbers.reduce((acc, num) => {
      this.first = Number(acc);
      this.second = Number(num);
      let demoSumm = this.operations[symbols[arrCounter]]();

      console.log(this.operations[symbols[arrCounter]](), 'pop')
      arrCounter++
      return demoSumm
    })
    console.log(numbers, symbols)
    console.log(summ)
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

}

let counter = new Calculator();
counter.count('25*56/823+1');


const numbers = document.querySelector('.numbers')
const display = document.querySelector('.main-display')

printOnDisplay();

function printOnDisplay() {
  numbers.addEventListener('click', (event) => {
    if (event.target == numbers) {

    } else if (display.textContent == 0) {
      display.textContent = event.target.innerText;
    } else if (event.target.innerText == '=') {
      console.log(counter.count(display.textContent))
    } else {
      display.textContent += event.target.innerText;
    }


  })
}