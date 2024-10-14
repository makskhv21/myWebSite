// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

app.post("/send", (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, 
        to: process.env.EMAIL_USER, 
        subject: `Message from ${name}`, 
        text: message, 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send("Email sent: " + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
