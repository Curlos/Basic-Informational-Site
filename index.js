const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  console.log([req.url])

  if ('/' === req.url) {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
    })
  } else if ('/about' === req.url) {
    fs.readFile('about.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
    })
  } else if ('/contact-me' === req.url) {
    fs.readFile('contact-me.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
    })
  } else {
    fs.readFile('404.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
    })
  }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})