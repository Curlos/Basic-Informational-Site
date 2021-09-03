const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/about.html'))
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/contact-me.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/404.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})