let students = require("./json/students.json")
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

  let filePath = path.join(__dirname, req.url === "/" ? 'index.html' : req.url)
  console.log(req.url)
  const ext = path.extname(filePath);
  let contentType = 'text/html';

  switch (ext) {
    case '.css':
      contentType = "text/css"
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      throw err
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })

      // let text = Buffer.from(req)
      res.end(content)
    }
  })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`)
});