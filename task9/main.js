class Student {
  constructor() {
    this.id;
    this.firstName;
    this.secondName;
    this.age;
    this.specialty;
  }
}
const addButton = document.querySelector('.submit-button');
const removeButton = document.querySelector('.remove-button');
const editButton = document.querySelector('.edit-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

async function addNewStudent() {
  const form = document.querySelector('.student-form');
  if (form[0].validity.valid) {
    let obj = {
      id: form[0].value,
      firstName: form[1].value,
      secondName: form[2].value,
      age: form[3].value,
      specialty: form[4].value,
    }
    console.log(obj);
    form.reset();
    const url = '/student'
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    console.log('not valid')
  }
}
async function removeStudent() {
  const form = document.querySelector('.student-form');
  if (form[0].validity.valid) {
    let id = {
      "id": form[0].value
    };
    console.log(id);
    form.reset();
    const url = '/student'
    await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    console.log('choose id ')
  }
}
async function editStudent() {
  const form = document.querySelector('.student-form');
  if (form[0].validity.valid) {
    let obj = {
      id: form[0].value,
      firstName: form[1].value,
      secondName: form[2].value,
      age: form[3].value,
      specialty: form[4].value,
    }
    console.log(obj);
    form.reset();
    const url = '/student'
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    console.log('not valid')
  }
}

async function prevStudent() {
  const form = document.querySelector('.student-form');
  if (form[0].validity.valid) {

    const url = form[0].value
    let data = await fetch(url, {
      method: 'GET'
    });
    let confo = await data.json();
    console.log(confo);
  } else {
    console.log('not valid')
  }
}

async function nextStudent() {
  const form = document.querySelector('.student-form');
  if (form[0].validity.valid) {

    const url = form[0].value
    let data = await fetch(url, {
      method: 'GET'
    });
    let confo = await data.json();
    console.log(confo);
  } else {
    console.log('not valid')
  }
}
addButton.addEventListener('click', addNewStudent);
removeButton.addEventListener('click', removeStudent);
editButton.addEventListener('click', editStudent);
prevButton.addEventListener('click', prevStudent);
nextButton.addEventListener('click', nextStudent);