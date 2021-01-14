

exports.handler = function(event, context, callback) {

const nodemailer = require('nodemailer');

    let data = JSON.parse(event.body)

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

    transporter.sendMail({
        from: `jeffretspencer42@gmail.com`, // sender address
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
