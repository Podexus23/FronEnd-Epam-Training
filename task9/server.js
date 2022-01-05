let students = require("./json/students.json")
const fs = require('fs');
const path = require('path');
const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const {
  request
} = require("http");
const {
  response
} = require("express");
const filePath = path.join(__dirname, 'json', 'students.json');

let app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.post('/student', (req, res) => {

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    let array = JSON.parse(data);
    array.push(req.body);
    array = JSON.stringify(array);
    fs.writeFile(filePath, array, (err) => {
      if (err) throw err;
      console.log('data loaded')
    })
  })
  res.redirect('/');
})

app.delete('/student', (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    const id = req.body.id;
    let array = JSON.parse(data);
    array = JSON.stringify(array.filter((elem) => elem.id != id));
    fs.writeFile(filePath, array, (err) => {
      if (err) throw err;
      console.log('data loaded')
    })
  })
  console.log('deleted')
  res.redirect('/');
})

app.put('/student', (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    const id = req.body.id;
    let array = JSON.parse(data);
    if (array.some(e => e.id == id))
      array = array.map((elem) => {
        if (elem.id === id) {
          return req.body;
        } else return elem
      })
    array = JSON.stringify(array);
    fs.writeFile(filePath, array, (err) => {
      if (err) throw err;
      console.log('data loaded')
    })
  })
  res.redirect('/');
})
app.get('/:id', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    let number = req.params.id;
    let obj = JSON.parse(data);
    let ids = obj.map(elem => elem.id)
    let min = Math.min(...ids);
    let max = Math.max(...ids);
    if (!ids.includes(number) && number < max && number > 0) {
      res.send(JSON.stringify({
        id: req.params.id,
        firstName: 'ID is empty'
      }))
    } else if (!ids.includes(number) && number > max) {
      res.send(JSON.stringify({
        id: req.params.id,
        firstName: 'ID is empty'
      }))
    } else {
      let student;
      obj.forEach((elem) => {
        if (elem.id == number) {
          student = elem;
        }
      })
      res.send(JSON.stringify(student));
    }
  })
})
app.get('/check/:id', (req, res) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    const array = JSON.parse(data);
    const id = req.params.id;
    let buttons = {
      prev: false,
      add: false,
      remove: false,
      edit: false,
      next: false,
    }
    let ids = array.map(elem => elem.id)
    let min = Math.min(...ids);
    let max = Math.max(...ids);

    if (id == min) buttons.prev = true;
    if (id == max) buttons.next = true;
    if (ids.includes(id)) buttons.add = true;
    if (!ids.includes(id)) {
      buttons.edit = true;
      buttons.remove = true;
    }
    if (!ids.includes(id) && id > max) {
      buttons.prev = true;
      buttons.next = true;
    }
    res.send(JSON.stringify(buttons))
  })
})
app.listen(port)