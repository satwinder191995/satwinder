const router = require('express').Router();
// const { User, Post, Comment, Vote } = require('../../models');
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
async function main(emailBody) {
  console.log("email");
  console.log(emailBody.name);
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: 'smtp.gmail.com',
    //  port: 465,
    auth: {
        user: 'satwindermail99@gmail.com',
        pass: 'lyrkfwhtpccvyped'
    }
});
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'satwinder1861@gmail.com', // sender address
    to: `satwinder47@outlook.com,${emailBody.email}`, // list of receivers
    subject: emailBody.subject, // Subject line
    // text: message, // plain text body
    html: `<div style="color:white;  background-color:black; padding:10px">
           <h1>${emailBody.name}</h1>
           <h2>${emailBody.email}</h2>
           <p>${emailBody.message}<p>
          </div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
router.post('/', (req, res) => {
  console.log("server");
console.log(req.body.formState);
main(req.body.formState).catch(console.error);
  });
  
  module.exports = router;