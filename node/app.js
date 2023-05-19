const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config;
const app = express();
const port = 3000;

//Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jennifer.n.joseph@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
    },
});

app.use(express.urlencoded({ extended: false}));

//Route for form
app.post('/contact', (req, res) => {
    const {name, email, message, subject } = req.body;

    const mailOptions = {
        from: email,
        to: 'jennifer.n.joseph@gmail.com',
        subject: `Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('An error occurred. Please try again later.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Message sent successfully.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});