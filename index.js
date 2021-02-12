const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');

const config = require("./config/key");

const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { request } = require('express');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('새해복 많이 받으세요')
})

app.post('/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body)

  // 몽고db에서 오는 메서드
  user.save((err, userInfo) => {
    if (err)
      return res.json({ seccess: false, err })
    return res.status(200).json({
      seccess: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})