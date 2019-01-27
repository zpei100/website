const express = require('express')
const path = require('path')
const app = express()
const compression = require('compression')

app.use(compression())
app.use(express.static(path.resolve(__dirname, '../../dist')))
app.get('/resume', (req, res) => {
  res.download(path.resolve(__dirname, '../../dist/assets/pdf/resume.pdf'))
})

app.listen(process.env.PORT || 3000)