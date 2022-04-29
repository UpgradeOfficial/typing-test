const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
             auth: {
                 user: "mytestmail145@gmail.com",
                 pass: "philip1234@iO"
             }
     })
message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello SMTP Email"
}
transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
}
)