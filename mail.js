const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: 'hi@gmail.com',
    to: 'juniortorr77@gmail.com',
    subject: 'Testing',
    text: 'I would like to get in touch with you'
}

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Message Sent!')
    }
})