class Student {
  constructor(json) {
    this.obj = JSON.parse(json);
    this.id = this.obj.id;
    this.firstName = this.obj.firstName;
    this.secondName = this.obj.secondName;
    this.age = this.obj.age;
    this.specialty = this.obj.specialty;
  }
}
const addButton = document.querySelector('.submit-button');
const removeButton = document.querySelector('.remove-button');
const editButton = document.querySelector('.edit-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const inputID = document.querySelector('#id')

function fullForm(obj) {
  const form = document.querySelector('form');
  if (obj.firstName == "ID is empty") {
    form[0].value = obj.id;
    form[1].value = obj.firstName;
    form[2].value = '';
    form[3].value = '';
    form[4].value = '';
  } else {
    form[0].value = obj.id;
    form[1].value = obj.firstName;
    form[2].value = obj.secondName;
    form[3].value = obj.age;
    form[4].value = obj.specialty;
  }
}

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
    const url = form[0].value - 1
    let data = await fetch(url, {
      method: 'GET'
    });
    let confo = await data.json();
    fullForm(confo);
  } else {
    console.log('not valid')
  }
}

async function nextStudent() {
  const form = document.querySelector('.student-form');
  if (form[0].validity.valid) {
    const url = +form[0].value + 1;
    let data = await fetch(url, {
      method: 'GET'
    });
    let confo = await data.json();
    fullForm(confo);
  } else {
    console.log('not valid')
  }
}


addButton.addEventListener('click', addNewStudent);
removeButton.addEventListener('click', removeStudent);
editButton.addEventListener('click', editStudent);
prevButton.addEventListener('click', prevStudent);
nextButton.addEventListener('click', nextStudent);