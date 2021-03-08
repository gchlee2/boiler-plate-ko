//백엔드 시작
const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key')

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
 useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect!!'))
  .catch(err => console.log(err))




app.get('/',(req,res) => res.send('Hello World!! 노드몬'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))