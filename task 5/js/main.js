class Calculator {
  constructor() {
    this.settings = {
      mode: 'integer', //!change mode
      priority: false,
    }
    this.isResult = false;
    this.first = 0;
    this.second = 0;
    this.operations = {
      '+': () => Number(this.first) + Number(this.second),
      '-': () => Number(this.first) - Number(this.second),
      "−": () => Number(this.first) - Number(this.second),
      '*': () => Number(this.first) * Number(this.second),
      '·': () => Number(this.first) * Number(this.second),
      '/': () => Number(this.first) / Number(this.second),
      ':': () => Number(this.first) / Number(this.second),
      '.': () => Number(`${this.first}.${this.second}`)
    }
    this.memory = [];
  }

  count(string) {
    let [numbers, symbols] = this.parse(string); //return [[Array=numbers] [Array=symbols]]
    console.log(numbers, symbols, 'after parse')
    if (symbols.includes('.')) {
      [numbers, symbols] = this.makeFloatNum(numbers, symbols)
    }
    console.log(numbers, symbols, 'after parse and float')
    let arrCounter = 0;
    let sum;
    const filteredSymbols = symbols.filter(elem => elem != '/' && elem != '*')

    if (!this.settings.priority) {
      sum = numbers.reduce((acc, num) => {
        this.first = Number(acc);
        this.second = Number(num);
        let demoSum = this.operations[symbols[arrCounter]]();
        arrCounter++
        return demoSum
      })
      arrCounter = 0;
    }
    if (this.settings.priority) {
      let doppler = [...numbers];
      for (let [i, j] = [0, 0]; j < numbers.length; i++, j++) {
        let elem;
        if (symbols[j] == '*' || symbols[j] == '/') {
          this.first = doppler[i];
          this.second = doppler[i + 1];
          elem = this.operations[symbols[j]]()
          doppler.splice(i, 2, elem)
          i--
        }
      }

      sum = doppler.reduce((acc, num) => {
        this.first = Number(acc);
        this.second = Number(num);
        let demoSum = this.operations[filteredSymbols[arrCounter]]();
        arrCounter++
        return demoSum
      })
      arrCounter = 0;
    }
    this.isResult = true;
    //check which answer between integer or float mode
    if (this.settings.mode == 'integer') {
      return Math.floor(sum)
    } else {
      return sum
    }
  }

  makeFloatNum(num, symbol) {
    let allNumbers = [];
    let allSymbols = [];
    // console.log(num, symbol, 'floatnum')
    for (let i = 0; i < symbol.length + 1; i++) {
      if (symbol[i] == '.') {
        allNumbers.push(`${num[i]}.${num[i+1]}`)
      }
      if (symbol[i] != '.' && symbol[i - 1] != '.') {
        allNumbers.push(num[i])
      }
    }
    allSymbols = symbol.filter(e => e != '.')
    return [allNumbers, allSymbols]
  }

  parse(string) {
    const isNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, Infinity];
    let numbersArr = [];
    let symbolArr = [];
    let char = '';

    for (let i = 0; i < string.length; i++) {
      //check if first symbol is minus
      if (string[0] == '-' && i == 0) {
        char = string[i]
        i++
      }
      //check for numbers
      if (isNumbers.includes(Number(string[i]))) {
        if (!isNumbers.includes(Number(string[i - 1]))) {
          if (char == '-') {
            char += string[i]
          } else {
            char = string[i];
          }

        } else {
          char += string[i];
        }
      }
      //check for symbols
      if (Object.keys(this.operations).includes(string[i])) {
        if (char) {
          numbersArr.push(char);
          char = '';
        }
        if (Object.keys(this.operations).includes(string[i - 1])) {

        } else symbolArr.push(string[i]);
      }
      //check for last number
      if (string.length - 1 == i) {
        if (char) {
          numbersArr.push(char);
        }
      }
      if (string[i] == "I" && string.includes('Infinity')) {
        numbersArr.push('Infinity');
        i += "Infinity".length - 1;
      }
    }
    return [numbersArr, symbolArr]
  }

  printOnDisplay() {
    const isNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbers = document.querySelector('.numbers')
    const display = document.querySelector('.main-display')
    numbers.addEventListener('click', (event) => {
      let lastChar = display.textContent[display.textContent.length - 1];
      let target = event.target;
      if (target == numbers) {
        return
      }
      if (Object.keys(this.operations).includes(lastChar) && Object.keys(this.operations).includes(target.textContent)) {
        display.textContent = display.textContent.slice(0, -1) + target.textContent
      }
      //if number on screen is previous answer
      else if (this.isResult) {
        if (target.innerText == '=') {
          return
        }
        if (Object.keys(this.operations).includes(target.textContent)) {
          this.isResult = false;
          display.textContent += target.innerText;
        } else {
          this.isResult = false;
          display.textContent = target.innerText;
        }
      }
      //if number on screen is 0
      else if (display.textContent == '0') {
        if (isNumbers.includes(Number(target.textContent))) {
          display.textContent = target.innerText;
        } else if (Object.keys(this.operations).includes(target.textContent)) {
          display.textContent += target.innerText;
        }
      } else if (target.innerText == '=') {
        let finale = this.count(display.textContent);
        this.memory.push([display.textContent, finale]);
        display.textContent = finale;
        this.showingMemory();
      } else {
        display.textContent += target.innerText;
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

  checkMode() {
    const form = document.querySelector('.integrity')
    const dotButton = document.querySelector('.operation[data-blocked]');
    form.addEventListener('click', (event) => {
      if (event.target.id == 'float') {
        this.settings.mode = 'float';
        dotButton.dataset.blocked = 'false'
        dotButton.disabled = false;
      } else if (event.target.id == 'integer') {
        this.settings.mode = 'integer';
        dotButton.dataset.blocked = 'true'
        dotButton.disabled = true;
      }
    })
  }

  checkPriority() {
    const box = document.querySelector('.priority label')
    box.addEventListener('click', (event) => {
      if (event.target.id == 'priority')
        this.settings.priority = event.target.checked
    })
  }

  workInProgress() {
    this.checkMode()
    this.checkPriority()
    this.printOnDisplay();
    this.cleanDisplay();
    this.sendJSON();
  }

  toJSON() {
    let jsonFile = {};
    this.memory.forEach((elem => {
      jsonFile[elem[0]] = String([elem[1]])
    }))
    return JSON.stringify(jsonFile)
  }

  sendJSON() {
    let jsonButtons = document.querySelector('.json-buttons');

    jsonButtons.addEventListener('click', (e) => {
      if (!e.target.classList.contains('json-button')) {
        return
      } else {
        let type = e.target.classList;
        if (type.contains('json-console')) {
          console.log(this.toJSON())
        }
        if (type.contains('json-page')) {
          const results = document.querySelector('.json-results')
          window.open(`json.html?json=${this.toJSON()}`)
        }
        if (type.contains('json-send')) {
          const memTable = document.querySelector('.memory-display')
          const json = JSON.parse(this.toJSON())
          fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify(json),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
            .then((response) => response.json())
            .then((json) => {
              memTable.textContent = `hello from server ${JSON.stringify(json)}`
            })
          console.log('send to server')
        }
      }
    })
  }
}

let calc = new Calculator();
calc.workInProgress();

// export {
//   calc
// }
// //test
// console.log(calc.count('1.2+1.2+1.2+8-13.5+1.2+1.2*1.2+8-13'), "-4.26", 'float priority') // float priority
// console.log(calc.count('1.2+1.2+1.2+8-13.5+1.2+1.2*1.2+8-13'), "-4.4", 'float') // float
// console.log(calc.count('17-5*6/3-2+4/2*17-5*6/3-2+4/2'), 29)
// console.log(calc.count('-7*8'), '-56')
// console.log(calc.count('6:2·8:3'))
// console.log(calc.count('7-4.3'), '2.7') //float