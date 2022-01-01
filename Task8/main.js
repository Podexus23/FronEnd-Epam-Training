const form = document.querySelector('.edit-form');
const ZAWARDO = 1000;
let order = new Array(3);
//main class that revert JSON to object and can create a block in HTML
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
          <p class="data">Date: <span class="subinfo">${this.data}</span></p>
          <p class="time">Time: <span class="subinfo">${this.time}</span></p>
    </div>
        <p class="block-event-name">Event: <span class="subinfo">${this.title}</span></p>
        <p class="block-priority">Priority: <span class="subinfo">${this.priority}</span> </p>
        <p class="block-notes">Notes: <span class="subinfo">${this.notes}</span></p>
    <a class="save-button">save</a>`
  }
}
//takes local info from .json files
async function takeInfo(path) {
  let required = await fetch(path);
  let info = await required.json()
  return JSON.stringify(info)
}
//fill blocks with info taken from local files
async function fillBlocksWithLocal() {
  let counter = 1;
  const events = document.querySelectorAll('.event-block');

  for (let event of events) {
    let conductor;
    changeStatus(counter, "loading...")
    if (order[counter - 1]) {
      conductor = order[counter - 1];
    } else {
      conductor = new Reverted(await takeInfo(`./json/your_name_data${counter}.json`))
    }
    let time = new Promise((resolve) => {
      setTimeout(() => resolve(conductor), ZAWARDO)
    })
    let smth = await time;
    smth.constructBlock(event)
    changeStatus(counter, "loaded")
    counter++;
    saveInfo();
  }
  counter = 1;
}

//return an object from form Information
function parseEditionForm() {
  let eventInfo = {
    date: form.querySelector('#date-event').value,
    time: form.querySelector('#time-event').value,
    title: form.querySelector('#title-event').value,
    priority: form.querySelector('#priority-event').value,
    notes: form.querySelector('#notes-event').value,
  }
  return JSON.stringify(eventInfo)
}
//search for checked radio and return it's number as text
function checkedBlock(type) {
  const radio = form.querySelector('.event-submit');
  const radioButtons = radio.querySelectorAll('input');
  let counter = 0;
  let checked;
  for (let button of radioButtons) {
    if (!checked) {
      counter++
    }
    if (button.checked) {
      checked = button;
    }
  }
  if (type === 'value') {
    return checked.value
  }
  if (type === 'number') {
    return counter
  }
}
//replacing info from form to chosen block
const button = document.querySelector('.submit-button');
button.addEventListener('click', () => {
  let demo = new Reverted(parseEditionForm());

  putInOrder(demo, checkedBlock('number'))
  formCleaner()
})
//check number of chosen block, and change it status text
function changeStatus(num, text) {
  const statBlocks = document.querySelectorAll('.status-text');
  statBlocks[num - 1].textContent = text;
  if (text === "loaded") {
    statBlocks[num - 1].classList.add('active')
  } else if (statBlocks[num - 1].classList.contains('active')) {
    statBlocks[num - 1].classList.remove('active')
  }
}
//obviously, cleaning form :)
function formCleaner() {
  form.reset();
}
//trying create a time machine

async function myNameIsDio() {
  fillBlocksWithLocal();
  setInterval(() => {
    fillBlocksWithLocal();
  }, ZAWARDO * 3);
}

myNameIsDio()

function putInOrder(eventClass, radioNumber) {
  order[radioNumber - 1] = eventClass;
}

function saveInfo() {
  let saveButtons = document.querySelectorAll('.save-button');
  saveButtons.forEach((elem) => {
    elem.addEventListener('click', save)
  })
}

function save(e) {
  let father = e.target.parentNode;
  let info = father.querySelectorAll('.subinfo');

  let blockInfo = {
    date: info[0].textContent,
    time: info[1].textContent,
    title: info[2].textContent,
    priority: info[3].textContent,
    notes: info[4].textContent,
  }

  let file = new Blob([JSON.stringify(blockInfo)], {
    type: 'text/plain'
  });
  e.target.href = URL.createObjectURL(file);
  if (father.dataset.number == 'first') e.target.download = `your_name_data1.json`;
  if (father.dataset.number == 'second') e.target.download = `your_name_data2.json`;
  if (father.dataset.number == 'third') e.target.download = `your_name_data3.json`;
}