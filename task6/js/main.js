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
// продукты: перец помидоры курица колбасы ветчина грибы маслины ананас халапеньо
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

let margarita = new Pizza(pizzaBaseType.italian, sauce.cheese, pizzaProducts.ham, pizzaProducts.tomato)
let cheapPizza = new Pizza(pizzaBaseType.thin, sauce.cheese, pizzaProducts.jalapeno);
let luxuryPizza = new Pizza(pizzaBaseType.thick, sauce.cheese, pizzaProducts.chicken, pizzaProducts.ham)
console.log(`%cBase price: ${margarita.basePrice()} and %cfinal price: ${margarita.madePizza()} of margarita`, 'color: #bada55', 'color: #c44');
console.log(`%cBase price: ${cheapPizza.basePrice()} and %cfinal price: ${cheapPizza.madePizza()} of cheapPizza`, 'color: #bada55', 'color: #c44');
console.log(`%cBase price: ${luxuryPizza.basePrice()} and %cfinal price: ${luxuryPizza.madePizza()} of luxuryPizza`, 'color: #bada55', 'color: #c44');
console.log(luxuryPizza.alertAllPizzas())
console.log(luxuryPizza.myName())
console.log(luxuryPizza.ps())