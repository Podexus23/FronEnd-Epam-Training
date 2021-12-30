const events = document.querySelectorAll('.event-block');

async function takeInfo(path) {
  let required = await fetch(path);
  let info = await required.json()
  return JSON.stringify(info)
}

async function fillBlocks() {
  let counter = 1;
  for (let event of events) {
    let time = new Promise((resolve) => {
      setTimeout(() => resolve('hi'), 1000)
    })
    let smth = await time;
    event.textContent = await takeInfo(`./json/your_name_data${counter}.json`)
    counter++
  }
  counter = 1;
}

fillBlocks();

class BlockEvent {
  constructor(data, name, priority, notes) {
    this.data = data.toString().slice(4, 15);
    this.time = data.toString().slice(16, 24);
    this.name = name;
    this.priority = priority;
    this.notes = notes;
  }

  addTime() {
    this.data = new Date();
  }

  toJSON() {
    let data = {
      data: this.data,
      time: this.time,
      name: this.name,
      priority: this.priority,
      notes: this.notes,
    }
    return JSON.stringify(data)
  }
}

// async function timer() {
//   const start = Date.now();
// let time = new Promise((resolve) => {
//   setTimeout(() => resolve('hi'), 1000)
// })
// let smth = await time;
//   if (smth) {
//     let end = Date.now() - start
//     console.log(end)
//   }
// }

// timer();