"use strict";

require('dotenv').config()
const nodemailer = require("nodemailer");
const { contentEmail } = require('./contentEmail')
const { user, pass } = process.env

async function main() {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: user, // generated ethereal user
            pass: pass, // generated ethereal password
        },
    });


    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Testing Email" <testingbarreiro@gmail.com>', // sender address
        to: "barreiromartinj@gmail.com", // list of receivers
        // to: "maartin@hotmail.com", // list of receivers
        subject: "Test Email", // Subject line
        text: "Testing Email", // plain text body
        html: contentEmail, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);