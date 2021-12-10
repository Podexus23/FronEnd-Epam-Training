class Pie {
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
  constructor(dough) {
    if (Object.keys(this.pieDough).includes(dough)) {
      this.dough = [dough, this.pieDough[dough]];
    } else {
      throw new Error('Wrong dough type, check .pieDough for enabled types')
    }
  }
  addNewType(obj, name, stats) {
    if (obj[name]) throw new Error("already exist, try changeType method")
    obj[name] = stats;
  }

  changeType(obj, name, stats) {
    if (obj[name]) obj[name] = stats;
    throw new Error("Type don't exist, try addNewType method")
  }

  static countMinimal(obj) {
    let minimal = 0;
    for (let type in obj) {
      if (!minimal) minimal = obj[type].price;
      if (minimal > obj[type].price) minimal = obj[type].price;
    }
    return minimal;
  }
  makePie() {
    if (this.dough) Pie.allPies.push({
      'dough': this.dough
    })
  }
}
Pie.allPies = [];

class Products extends Pie {
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
  constructor(dough, ...prod) {
    super(dough);
    this.productBasket = [];

    prod.forEach((elem) => {
      if (Object.keys(this.pieProducts).includes(elem)) {
        this.productBasket.push(elem, this.pieProducts[elem])
      } else {
        throw new Error('Wrong product, check .pieProduct for enabled types')
      }
    })


  }


}

class Sauce extends Products {
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
  constructor(dough, ...prod) {
    super(dough);
    this.productBasket = [];
    this.sauce = [];
    let prodBasket = prod.filter((elem) => !Object.keys(this.pieSauce).includes(elem));

    prod.forEach((elem) => {
      if (Object.keys(this.pieSauce).includes(elem)) {
        this.sauce = [elem, this.pieSauce[elem]]
      }
    })

    prodBasket.forEach((elem) => {
      if (Object.keys(this.pieProducts).includes(elem)) {
        this.productBasket.push(elem, this.pieProducts[elem])
      } else {
        throw new Error('Wrong product, check .pieProduct for enabled types')
      }
    })
  }

  makePie() {
    let pizza = {
      'dough': this.dough,
      'products': this.productBasket,
      'sauce': this.sauce,
    }
    Pie.allPies.push(pizza);
    return pizza;
  }
}

let pirog = new Pie('thin');
pirog.makePie()
console.log(pirog)

let basket = new Products('puff', 'ham', 'pineapple');
console.log(basket)
basket.makePie();

let saucy = new Sauce('puff', 'ham', 'pineapple', 'ketchup')
saucy.makePie();
console.log(saucy)

console.log(Pie.allPies)

class PieSeller {
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
  pieResult = {
    dough: 'default',
    products: 'default',
    sauce: 'default',
  }
  constructor() {}
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
      console.log(obj[key])
    }

    document.querySelector('.pizzamaker').append(article)
  }

  createResultBlock(name, obj) {
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
      div.append(this.createTypeBlock(name, [elem], 'empty'))
    })

    document.querySelector('.pizzamaker').append(article)
  }

  createTypeBlock(type, [name, info = undefined], key = "default") {
    // console.log((type, name, key))
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
      price.textContent = `Price: ${info.price} $`
      energy.textContent = `Energy: ${info.calories} kcal`
      div.append(price);
      div.append(energy);
    }
    return div
  }

  //making pie
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
            productResult.append(this.addToProductCart())
            productResult.append('Products');
          }
        }
      })
    })
  }
  addToProductCart() {
    const products = document.querySelectorAll('.product .type-block');
    console.dir(products)
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
  bakePie() {
    this.selectBlock();
    this.showResultBlock();
  }
  //working page
  openShop() {
    this.createShopPage();
    this.bakePie();
  }
}
PieSeller.allPies = [];
let shop = new PieSeller();

shop.openShop()