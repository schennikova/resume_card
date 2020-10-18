const app = require('../app');
const router = require('express').Router();
const nodemailer = require("nodemailer")
const mongoose = require('mongoose');
const Api = require('../model/api');
const api = require('../model/api');
mongoose.connect('mongodb://localhost:27017/api', { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/', (req, res) => {
  res.render('startPage');
});


router.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,// порт для подключения
    secure: true,
    auth: {
      user: "testerBears@gmail.com",
      pass: "elbrusbootcamp",
    }
  })

  const textBody = `FROM: ${req.body.name} EMAIL: ${req.body.email} MESSAGE: ${req.body.message}`;

  const htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${req.body.name} <a href="mailto:${req.body.email}">${req.body.email}</a></p><p>${req.body.message}</p>`;
  const mail = {
    from: "testerBears@gmail.com",
    to: "testerBears@gmail.com",
    subject: "Mail From Contact Form",
    text: textBody,
    html: htmlBody

  }

  transporter.sendMail(mail, function (err, info) {
    if (err) {
      console.log(err);
      res.json({ message: "сообщение не отправлено: произошла ошибка;" });
    }
    else {
      res.json({ message: `сообщение отправлено: ${info.messageId}` });
    }
  });

})


router.get('/viewProjects', (req, res) => {
  const result = Api.find({})
    res.render('writeLetter',{result})
})




router.post('/viewProjects', async (req, res) => {
  const { result } = req.body;
  // const apiDate = new Api({
  //   result: { result }
  // })
  // await apiDate.save();


})
// router.get('/viewProjects/s', (req, res) => {

//   res.render('writeLetter')
// })

module.exports = router;
