//백엔드 시작
const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dhlee:qwe123@cluster0.a9rdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
 useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect!!'))
  .catch(err => console.log(err))




app.get('/',(req,res) => res.send('Hello World!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))