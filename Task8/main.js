const events = document.querySelectorAll('.event-block');
const form = document.querySelector('.edit-form');

class Reverted {
  constructor(json) {
    this.obj = JSON.parse(json)
    this.data = this.obj.date
    this.time = this.obj.time
    this.title = this.obj.title
    this.priority = this.obj.priority;
    this.notes = this.obj.notes;
  }

  constructBlock(block) {
    block.innerHTML = `
    <div class="block-data">
          <p class="data">${this.data}</p>
          <p class="time">${this.time}</p>
    </div>
        <div class="block-event-name">${this.title}</div>
        <div class="block-priority">${this.priority} </div>
        <div class="block-notes">${this.notes}</div>`
  }
}

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
    let conductor = new Reverted(await takeInfo(`./json/your_name_data${counter}.json`))
    console.log(conductor)
    conductor.constructBlock(event)
    counter++
  }
  counter = 1;
}

fillBlocks();

function parseEditionForm() {
  let eventInfo = {
    date: form.querySelector('#date-event').value,
    time: form.querySelector('#time-event').value,
    title: form.querySelector('#title-event').value,
    priority: form.querySelector('#priority-event').value,
    notes: form.querySelector('#notes-event').value,
  }
  return eventInfo
}

function replaceBlock(event) {
  const radio = form.querySelector('.event-submit');
  const radioButtons = radio.querySelectorAll('input')
  let checked;
  for (let button of radioButtons) {
    if (button.checked) checked = button;
  }
  let boxNumber = checked.value
  console.log(boxNumber)
  let box = document.querySelector(`.event-block[data-number="${boxNumber}"]`)
  event.constructBlock(box)

}

const button = document.querySelector('.submit-button');
button.addEventListener('click', () => {
  let string = JSON.stringify(parseEditionForm())
  let demo = new Reverted(string);

  replaceBlock(demo)
  console.log(demo, 'demo')
})