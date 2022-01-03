class Student {
  constructor() {
    this.id;
    this.firstName;
    this.secondName;
    this.age;
    this.speciality;
  }
}
const addButton = document.querySelector('.submit-button');

function takeInfoFromFrom() {
  const form = document.querySelector('.student-form')
  let obj = {
    id: form[0].value,
    firstName: form[1].value,
    secondName: form[2].value,
    age: form[3].value,
    speciality: form[4].value,
  }
  console.log(obj);
  form.reset()
}

addButton.addEventListener('click', takeInfoFromFrom)