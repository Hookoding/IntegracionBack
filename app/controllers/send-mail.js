const sendMailController = {};
const nodemailer = require('nodemailer');
//const Mail = require('../models/Mail');

sendMailController.createMail = async (req, res) => {
    const {username,email,firstName,lastName} = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${username}</li>
            <li>User Email: ${email}</li>
            <li>First name: ${firstName}</li>
            <li>Last name: ${lastName}</li>
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        //port: 465,
        //secure: false,
        auth: {
            user: 'richard.vasquez2@unmsm.edu.pe',
            pass: process.env.MAILPASS
        }
    });

    let info = await transporter.sendMail({
        from: '"Richard Vasquez" <richard.vasquez2@unmsm.edu.pe>', // sender address,
        to: email,
        subject: 'Website Contact Form',
        // text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.json({message:"Correo Enviado"});
}

module.exports = sendMailController;