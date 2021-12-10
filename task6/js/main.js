// типы теста+
const pizzaBaseType = {
  thin: {
    calories: 100,
    weight: 100,
    price: 15,
  },
  thick: {
    calories: 300,
    weight: 250,
    price: 25,
  },
  italian: {
    calories: 200,
    weight: 175,
    price: 20,
  },
  calzone: {
    calories: 225,
    weight: 200,
    price: 15,
  },
  focaccia: {
    calories: 175,
    weight: 130,
    price: 17,
  },
  puff: {
    calories: 150,
    weight: 120,
    price: 17,
  },
}
// продукты:
const pizzaProducts = {
  pepper: {
    calories: 10,
    weight: 7,
    price: 1.5,
  },
  tomato: {
    calories: 10,
    weight: 10,
    price: 1.5,
  },
  chicken: {
    calories: 20,
    weight: 15,
    price: 2.5,
  },
  sausages: {
    calories: 35,
    weight: 20,
    price: 1.5,
  },
  ham: {
    calories: 35,
    weight: 20,
    price: 2.5,
  },
  mushrooms: {
    calories: 20,
    weight: 10,
    price: 1.5,
  },
  olives: {
    calories: 10,
    weight: 6,
    price: 1.5,
  },
  pineapple: {
    calories: 34,
    weight: 13,
    price: 2.5,
  },
  jalapeno: {
    calories: 10,
    weight: 4,
    price: 0.5,
  },
}
// соусы
const sauce = {
  ketchup: {
    calories: 50,
    weight: 25,
    price: 3,
  },
  mustard: {
    calories: 50,
    weight: 25,
    price: 3,
  },
  cheese: {
    calories: 50,
    weight: 25,
    price: 3,
  },
  bbq: {
    calories: 50,
    weight: 25,
    price: 3,
  },
  salsa: {
    calories: 50,
    weight: 25,
    price: 3,
  },
  sweet: {
    calories: 50,
    weight: 25,
    price: 3,
  },
}
//result
const result = {
  dough: 'default',
  products: 'default',
  sauce: 'default',
}
class Pizza {
  constructor(base, sauce, ...products) {
    this.base = base;
    this.sauce = sauce;
    this.products = products;
  }
  savePizza() {
    let preMadePizza = [
      this, this.countFinalPrice()
    ]
    Pizza.allPizzas.push(preMadePizza)
  }
  alertAllPizzas() {
    return Pizza.allPizzas
  }
  basePrice() {
    let prodSum;
    if (this.products.length == 1) {
      prodSum = this.products[0].price;
    } else {
      prodSum = this.products.reduce((a, b) => a.price + b.price);
    }
    let sum = this.base.price + this.sauce.price + prodSum
    return sum
  }
  minPrice() {
    let minProd;
    let minType;
    let minSauce;
    for (let type in pizzaProducts) {
      if (!minProd) minProd = pizzaProducts[type].price;
      if (minProd > pizzaProducts[type].price) minProd = pizzaProducts[type].price;
    }
    for (let type in pizzaBaseType) {
      if (!minType) minType = pizzaBaseType[type].price;
      if (minType > pizzaBaseType[type].price) minType = pizzaBaseType[type].price;
    }
    for (let type in sauce) {
      if (!minSauce) minSauce = sauce[type].price;
      if (minSauce > sauce[type].price) minSauce = sauce[type].price;
    }
    const minimalCost = minProd + minType + minSauce;
    return minimalCost;
  }
  maxPrice() {
    let minProd;
    let minType;
    let minSauce;
    for (let type in pizzaProducts) {
      if (!minProd) minProd = pizzaProducts[type].price;
      if (minProd < pizzaProducts[type].price) minProd = pizzaProducts[type].price;
    }
    for (let type in pizzaBaseType) {
      if (!minType) minType = pizzaBaseType[type].price;
      if (minType < pizzaBaseType[type].price) minType = pizzaBaseType[type].price;
    }
    for (let type in sauce) {
      if (!minSauce) minSauce = sauce[type].price;
      if (minSauce < sauce[type].price) minSauce = sauce[type].price;
    }
    const minimalCost = minProd + minType + minSauce;
    return minimalCost;
  }
  countFinalPrice() {
    const firstLimit = this.minPrice() + ((this.maxPrice() - this.minPrice()) / 2);
    const secondLimit = this.maxPrice();
    console.log(firstLimit, secondLimit, this.basePrice())
    let finalPrice;
    if (this.basePrice() < firstLimit) {
      finalPrice = this.basePrice() * 1.2;
    }
    if (this.basePrice() > firstLimit && this.basePrice() < secondLimit) {
      finalPrice = this.basePrice() * 1.15;
    }
    if (this.basePrice() > secondLimit) {
      finalPrice = this.basePrice() * 1.1;
    }
    return finalPrice.toFixed(2)
  }
  madePizza() {
    this.countFinalPrice();
    this.savePizza();
    return this.countFinalPrice()
  }
  myName() {
    return JSON.stringify(Pizza.allPizzas)
  }
  ps() {
    return JSON.parse(this.myName())
  }
}
Pizza.allPizzas = [];

// let margarita = new Pizza(pizzaBaseType.italian, sauce.cheese, pizzaProducts.ham, pizzaProducts.tomato)
// let cheapPizza = new Pizza(pizzaBaseType.thin, sauce.cheese, pizzaProducts.jalapeno);
// let luxuryPizza = new Pizza(pizzaBaseType.thick, sauce.cheese, pizzaProducts.chicken, pizzaProducts.ham)

// console.log(`%cBase price: ${margarita.basePrice()} and %cfinal price: ${margarita.madePizza()} of margarita`, 'color: #bada55', 'color: #c44');
// console.log(`%cBase price: ${cheapPizza.basePrice()} and %cfinal price: ${cheapPizza.madePizza()} of cheapPizza`, 'color: #bada55', 'color: #c44');
// console.log(`%cBase price: ${luxuryPizza.basePrice()} and %cfinal price: ${luxuryPizza.madePizza()} of luxuryPizza`, 'color: #bada55', 'color: #c44');
// console.log(luxuryPizza.alertAllPizzas())
// console.log(luxuryPizza.myName())
// console.log(luxuryPizza.ps())

createPage();

function createPage() {
  createSelectionBlock("dough", pizzaBaseType)
  createSelectionBlock("product", pizzaProducts)
  createSelectionBlock("sauce", sauce)
  createResultBlock('result', result)
};

function createSelectionBlock(name, obj) {
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

  names.forEach((elem) => {
    div.append(createTypeBlock(name, elem))
  })

  document.querySelector('.pizzamaker').append(article)
}

function createResultBlock(name, obj) {
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const div = document.createElement('div');
  const names = Object.keys(obj);

  article.classList.add(`pizzamaker-${name}`);
  article.append(h2);
  article.append(div)

  h2.classList.add('title');
  h2.textContent = `Your pizza`;

  div.classList.add('wrapper');
  div.classList.add(`${name}`);

  names.forEach((elem) => {
    div.append(createTypeBlock(name, elem, 'empty'))
  })

  document.querySelector('.pizzamaker').append(article)
}

function createTypeBlock(type, name, key = "default") {
  const div = document.createElement('div');
  const img = document.createElement('div');

  img.classList.add('block-img')

  div.classList.add(`${type}-${name}`)
  div.classList.add(`type-block`)
  div.dataset.active = key;
  div.textContent = name;
  div.prepend(img);
  return div
}


function makePizza() {
  selectBlock();
  showResultBlock();
  // ValidatePizza();
}

function selectBlock() {
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

function showResultBlock() {
  const wrappers = document.querySelectorAll('.wrapper');
  const doughResult = document.querySelector('.result-dough');
  const productResult = document.querySelector('.result-products');
  const sauceResult = document.querySelector('.result-sauce');

  wrappers.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      if (e.target.closest('.type-block') && elem.querySelector('.type-block[data-active="active"]')) {
        let chosen = elem.querySelector('.type-block[data-active="active"]')
        // console.dir(chosen)
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
          productResult.append(addToProductCart())
          productResult.append('Products');
        }
      }
    })
  })
}

function addToProductCart() {
  const products = document.querySelectorAll('.product .type-block');
  console.dir(products)
  const div = document.createElement('div');
  div.classList.add('result-basket')
  products.forEach((elem) => {
    if (elem.dataset.active == 'active') {
      let insider = createTypeBlock('result', elem.textContent, key = "load")
      insider.innerHTML = elem.innerHTML;
      div.append(insider)
    }
  })
  return div
}

makePizza()