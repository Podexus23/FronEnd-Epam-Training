/**
 * Class Creating page, count price and hold information about all addition elements
 */
class PieSeller {
  /** shows maximum extra value for prices
   * @default
   */
  extra = 1.2;

  /**Default dough types
   * @default
   * @inner
   */
  pieDough = {
    'thin': {
      calories: 100,
      weight: 100,
      price: 15,
    },
    'thick': {
      calories: 300,
      weight: 250,
      price: 25,
    },
    'italian': {
      calories: 200,
      weight: 175,
      price: 20,
    },
    'calzone': {
      calories: 225,
      weight: 200,
      price: 15,
    },
    'focaccia': {
      calories: 175,
      weight: 130,
      price: 17,
    },
    'puff': {
      calories: 150,
      weight: 120,
      price: 17,
    },
  }
  /**Default products types
   * @default
   * @inner
   */
  pieProducts = {
    'pepper': {
      calories: 10,
      weight: 7,
      price: 1.5,
    },
    'tomato': {
      calories: 10,
      weight: 10,
      price: 1.5,
    },
    'chicken': {
      calories: 20,
      weight: 15,
      price: 2.5,
    },
    'sausages': {
      calories: 35,
      weight: 20,
      price: 1.5,
    },
    'ham': {
      calories: 35,
      weight: 20,
      price: 2.5,
    },
    'mushrooms': {
      calories: 20,
      weight: 10,
      price: 1.5,
    },
    'olives': {
      calories: 10,
      weight: 6,
      price: 1.5,
    },
    'pineapple': {
      calories: 34,
      weight: 13,
      price: 2.5,
    },
    'jalapeno': {
      calories: 10,
      weight: 4,
      price: 0.5,
    },
  }
  /**Default Sauce types
   * @default
   * @inner
   */
  pieSauce = {
    'ketchup': {
      calories: 50,
      weight: 25,
      price: 3,
    },
    'mustard': {
      calories: 50,
      weight: 25,
      price: 3,
    },
    'cheese': {
      calories: 50,
      weight: 25,
      price: 3,
    },
    'bbq': {
      calories: 50,
      weight: 25,
      price: 3,
    },
    'salsa': {
      calories: 50,
      weight: 25,
      price: 3,
    },
    'sweet': {
      calories: 50,
      weight: 25,
      price: 3,
    },
  }
  /**Constant object for making result block 
   * @constant
   * @inner
   */
  pieResult = {
    dough: 'default',
    products: 'default',
    sauce: 'default',
  }
  /**
   * Takes info about Product, it's price, and energy value
   * @constructor
   */
  constructor() {
    this.pizza;
    this.price;
    this.energy;
  }
  //page generator
  createShopPage() {
    this.createSelectionBlock("dough", this.pieDough)
    this.createSelectionBlock("product", this.pieProducts)
    this.createSelectionBlock("sauce", this.pieSauce)
    this.createResultBlock('result', this.pieResult)
  }
  createSelectionBlock(name, obj) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const names = Object.keys(obj);

    article.classList.add(`pizzamaker-${name}`);
    article.append(h2);
    article.append(div)

    h2.classList.add('title');
    h2.textContent = `Select the type of ${name}`;

    div.classList.add('wrapper');
    div.classList.add(`${name}`);

    for (let key in obj) {
      div.append(this.createTypeBlock(name, [key, obj[key]]))
    }

    document.querySelector('.pizzamaker').append(article)
  }
  createResultBlock(name, obj) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const names = Object.keys(obj);
    const button = document.createElement('button')
    const summ = document.createElement('p')

    article.classList.add(`pizzamaker-${name}`);
    article.append(h2);
    article.append(div)

    h2.classList.add('title');
    h2.textContent = `Your pizza`;

    div.classList.add('wrapper');
    div.classList.add(`${name}`);

    button.classList.add('result-button');
    button.textContent = 'Buy Pizza';
    button.disabled = true;

    summ.classList.add('result-summ')
    summ.textContent = `Final price: 0 $, Energy: 0 kcal`
    names.forEach((elem) => {
      div.append(this.createTypeBlock(name, [elem], 'empty'))
    })
    article.append(button)
    article.append(summ)
    document.querySelector('.pizzamaker').append(article)
  }
  createTypeBlock(type, [name, info = undefined], key = "default") {
    const div = document.createElement('div');
    const img = document.createElement('div');
    const price = document.createElement('p');
    const energy = document.createElement('p');


    img.classList.add('block-img')
    price.classList.add('block-price');
    energy.classList.add('block-energy');



    div.classList.add(`${type}-${name}`)
    div.classList.add(`type-block`)
    div.dataset.active = key;
    div.textContent = name;
    div.prepend(img);
    if (info) {
      price.textContent = `Price: ${Number((info.price * this.extra).toFixed(2))} $`
      energy.textContent = `Energy: ${info.calories} kcal`
      div.append(price);
      div.append(energy);
    }
    return div
  }
  //making pie
  chooseIngredients() {
    this.selectBlock();
    this.showResultBlock();
  }
  selectBlock() {
    const wrappers = document.querySelectorAll('.wrapper');

    wrappers.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const blocks = elem.querySelectorAll('.type-block')
        if (e.target.closest('.type-block')) {
          let block = e.target.closest('.type-block');
          if (block.dataset.active == "default") {
            if (elem.classList.contains('product')) {} else {
              blocks.forEach((elem) => {
                elem.dataset.active = "default"
              })
            }
            block.dataset.active = "active"
          } else if (block.dataset.active == "active") {
            block.dataset.active = "default";
          }
        }
      })
    })
  }
  showResultBlock() {
    const wrappers = document.querySelectorAll('.wrapper');

    wrappers.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const doughResult = document.querySelector('.result-dough');
        const productResult = document.querySelector('.result-products');
        const sauceResult = document.querySelector('.result-sauce');
        const summBlock = document.querySelector('.result-summ');

        if (e.target.closest('.type-block') && elem.querySelector('.type-block[data-active="active"]')) {
          let chosen = elem.querySelector('.type-block[data-active="active"]')
          if (chosen.parentElement.classList.contains('dough')) {
            doughResult.dataset.active = 'load';
            doughResult.innerHTML = chosen.innerHTML;
          }
          if (chosen.parentElement.classList.contains('sauce')) {
            sauceResult.dataset.active = 'load';
            sauceResult.innerHTML = chosen.innerHTML;
          }
          if (chosen.parentElement.classList.contains('product')) {
            productResult.dataset.active = 'load';
            productResult.innerHTML = ''
            productResult.append(this.addToProductCart())
          }
        }

        if (productResult.dataset.active == sauceResult.dataset.active && doughResult.dataset.active == 'load' && productResult.dataset.active == doughResult.dataset.active) {
          let summAndEnergy = this.showPrice();
          let button = document.querySelector('.result-button');
          button.disabled = false
          summBlock.textContent = `Final price: ${summAndEnergy[0]} $, Energy: ${summAndEnergy[1]} kcal`
        }
      })
    })
  }
  addToProductCart() {
    const products = document.querySelectorAll('.product .type-block');
    const div = document.createElement('div');
    div.classList.add('result-basket')
    products.forEach((elem) => {
      if (elem.dataset.active == 'active') {
        let insider = this.createTypeBlock('result', elem.textContent, "load")
        insider.innerHTML = elem.innerHTML;
        div.append(insider)
      }
    })
    return div
  }
  //make a purchase
  showPrice() {
    let [summ, energy] = this.countBasePriceAndEnergy();
    let base = this.countMinMaxPrice()
    let final = this.makeFinalPrice(base, summ);
    this.price = final;
    this.energy = energy;
    return [this.makeFinalPrice(base, summ), energy]
  }
  countBasePriceAndEnergy() {
    const result = document.querySelector('.result');
    let blocks = result.querySelectorAll('.type-block[data-active="load"]')
    let prods = [];
    if (this.arguments) {
      prods = this.arguments.flat()
    } else {
      blocks.forEach((elem) => {
        if (elem.childNodes[1]) {
          prods.push(elem.childNodes[1].textContent)
        }
      })
    }

    let summ = this.pieDough[prods[0]].price +
      prods.slice(1, prods.length - 1).map((elem) => {
        return this.pieProducts[elem].price
      }).reduce((a, b) => a + b) + this.pieSauce[prods[prods.length - 1]].price;

    let energy = this.pieDough[prods[0]].calories +
      prods.slice(1, prods.length - 1).map((elem) => {
        return this.pieProducts[elem].calories
      }).reduce((a, b) => a + b) + this.pieSauce[prods[prods.length - 1]].calories;

    return [summ, energy]
  }
  makeFinalPrice([min, max], basePrice) {
    const firstLimit = min;
    const secondLimit = max;
    let finalPrice;
    if (basePrice <= firstLimit) {
      finalPrice = basePrice * this.extra;
    }
    if (basePrice > firstLimit && basePrice < secondLimit) {
      finalPrice = basePrice * 1.15;
    }
    if (basePrice >= secondLimit) {
      finalPrice = basePrice * 1.1;
    }
    return (Math.ceil(finalPrice * 100) / 100).toFixed(2)
  }
  //working page
  openShop() {
    this.createShopPage();
    this.chooseIngredients();
    const button = document.querySelector('.result-button');

    button.addEventListener('click', this.buyPie.bind(this))
  }
  buyPie() {
    const result = document.querySelector('.result');

    let blocks = result.querySelectorAll('.type-block[data-active="load"]');
    let prods = [];
    blocks.forEach((elem) => {
      if (elem.childNodes[1]) {
        prods.push(elem.childNodes[1].textContent);
      }
    })
    this.pizza = new Pizza(prods[0], ...prods.slice(1, prods.length));
    this.savePizza(this.pizza, this.price, this.energy)
    this.cleaner();
  }
  // supportive methods
  countMinMaxPrice() {
    let minProd, minType, minSauce;
    let maxProd, maxType, maxSauce;
    for (let type in this.pieProducts) {
      if (!minProd) minProd = this.pieProducts[type].price;
      if (!maxProd) maxProd = this.pieProducts[type].price;
      if (minProd > this.pieProducts[type].price) minProd = this.pieProducts[type].price;
      if (maxProd < this.pieProducts[type].price) maxProd = this.pieProducts[type].price;
    }
    for (let type in this.pieDough) {
      if (!minType) minType = this.pieDough[type].price;
      if (!maxType) maxType = this.pieDough[type].price;
      if (minType > this.pieDough[type].price) minType = this.pieDough[type].price;
      if (maxType < this.pieDough[type].price) maxType = this.pieDough[type].price;
    }
    for (let type in this.pieSauce) {
      if (!minSauce) minSauce = this.pieSauce[type].price;
      if (!maxSauce) maxSauce = this.pieSauce[type].price;
      if (minSauce > this.pieSauce[type].price) minSauce = this.pieSauce[type].price;
      if (maxSauce < this.pieSauce[type].price) maxSauce = this.pieSauce[type].price;
    }
    const minCost = minProd + minType + minSauce;
    const maxCost = maxProd + maxType + maxSauce;
    return [minCost, maxCost];
  }
  savePizza(...pie) {
    PieSeller.allPies.push(pie)
  }
  cleaner() {
    const allActive = document.querySelectorAll(`.type-block[data-active="active"]`);
    const resultBlock = document.querySelector('.result');
    const resultText = document.querySelector('.result-summ');
    const div = document.createElement('div');
    const names = Object.keys(this.pieResult);
    const title = document.querySelector('.pizzamaker-result .title')

    div.classList.add('wrapper');
    div.classList.add('result');
    names.forEach((elem) => {
      div.append(this.createTypeBlock('result', [elem], 'empty'))
    })

    allActive.forEach(elem => {
      elem.dataset.active = 'default'
    })

    resultBlock.remove();
    document.querySelector('.result-button').disabled = true;
    title.after(div)

    this.pizza = undefined;
    resultText.textContent = `Final price: 0 $, Energy: 0 kcal`
    console.log(PieSeller.allPies)
  }
  createConsolePie(dough, ...products) {
    let consolePizza = new Pizza(dough, ...products)
    let energyPrice = consolePizza.countBasePriceAndEnergy()
    let price = this.makeFinalPrice(this.countMinMaxPrice(), energyPrice[0]);
    let energy = energyPrice[1]
    this.savePizza(consolePizza, price, energy);
  }

}
PieSeller.allPies = [];


class Pizza extends PieSeller {
  constructor(dough, ...products) {

    super();
    this.arguments = [dough, products].flat()
    if (!Object.keys(this.pieDough).includes(dough)) {
      throw new Error('Sorry, wrong dough type, try another or add new type')
    } else {
      this.dough = [dough, this.pieDough[dough]];
    }

    this.products = products.filter(elem => {
      if (Object.keys(this.pieProducts).includes(elem)) {
        return elem
      } else if (!Object.keys(this.pieProducts).includes(elem) && !Object.keys(this.pieSauce).includes(elem)) {
        throw new Error('Sorry, wrong product type, try another or add new type')
      }
    }).map(elem => [elem, this.pieProducts[elem]])
    if (!Object.keys(this.pieSauce).includes(products[products.length - 1])) {
      throw new Error('Sorry, wrong sauce type, try another or add new type')
    } else {
      this.sauce = [products[products.length - 1], this.pieSauce[products[products.length - 1]]];
    }

  }
}

let shop = new PieSeller();
shop.openShop()
shop.createConsolePie('italian', 'ham', 'pineapple', 'bbq')
console.log(PieSeller.allPies, 'all pies')