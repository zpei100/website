const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const compression = require('compression')

app.use(compression())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../../dist/js')));
app.use(express.static(path.resolve(__dirname, '../../dist/css')));
app.use(express.static(path.resolve(__dirname, '../../dist/assets')));
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.get('/resume', (req, res) => {
  res.download(path.resolve(__dirname, '../../dist/assets/pdf/resume.pdf'))
})

app.listen(process.env.PORT || 3000)