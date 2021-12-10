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
    Pie.allPies.push(pizza)
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
  constructor() {}
}

let shop = new PieSeller();