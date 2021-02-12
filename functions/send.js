const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'Bellissimoinvsts@gmail.com', // generated ethereal user
      pass: 'Bellissimo2020', // generated ethereal password
    },
  });

exports.handler = async function(event, context, callback) {
    console.log('sent');
    let data = JSON.parse(event.body)
    await transporter.sendMail({
        from: `Bellissimoinvsts@gmail.com`, // sender address
        to: `${data.email}`, // list of receivers
        subject: "Welcome to BELLISSIMO", // Subject line
        html: `
              <b>Hello ${data.email},<b/>
              <h4>
                Welcome to BELLISSIMO the best Bitcoin Mining platform. 
                our platform uses F2Pool, AntPool, BTCC, and BW the latest
                software to give our customers the best. Our referal program also help 
                our customers earn more.
              </h4>

              <b>Verification code: ${data.verify}</b>
    
        `
      });
}
