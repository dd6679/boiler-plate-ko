const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nk:abcd1234@cluster.i4bsm.mongodb.net/db?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('노드 강의 듣고 있어욤')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})