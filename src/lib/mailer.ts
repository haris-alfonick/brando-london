const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!), // Ensure the port is a number
    secure: true, // Use true for SSL/TLS on port 465
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

const sendMail = async (email:any, subject:any, content:any) => {

    try {
        const mailOptions = {
            from:  `"Brando London" <${process.env.SMTP_MAIL}>`,
            to: email,
            subject: subject,
            html: content
        };

        await transporter.sendMail(mailOptions);
        console.log("Message sent successfully.");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = {
    sendMail
};