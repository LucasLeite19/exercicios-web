const express = require ('express')
const app = express()
const bobyparser = require('body-parser')

app.use(bobyparser.urlencoded({extended: true }))

app.post('/usuarios' ,(req, resp) =>{
  console.log(req.body)
  resp.send('<h1>Parabéns</h1>')
} )

app.listen(5500)