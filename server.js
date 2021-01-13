const express = require('express');
const bodyParser = require('body-parser')
var nodemailer = require('nodemailer')
const path = require('path');
const app = express();
const cors = require('cors')
app.use(cors({origin:"*"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({'contentType': "application/json"}));
app.use(express.static(path.join(__dirname, 'build')));



let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'jeffretspencer42@gmail.com', // generated ethereal user
    pass: 'tino2021%', // generated ethereal password
  },
});

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.post('/sign', (req, res)=>{

  let email = req.body.email
  //let name = req.body.name
  transporter.sendMail({
    from: `BELLISSIMO`, // sender address
    to: `${email}`, // list of receivers
    subject: "Welcome to BELLISSIMO", // Subject line
    html: `
          <b>Hello ${email},<b/>
          <h4>
            Welcome to BELLISSIMO the best Bitcoin Mining platform. 
            our platform uses F2Pool, AntPool, BTCC, and BW the latest
            software to give our customers the best. Our referal program also help 
            our customers earn more.
          </h4>

    `
  });
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log(`http://localhost:${3000}`);
});