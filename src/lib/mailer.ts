import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), // Convert port to a number
    secure: true, // Use true for SSL/TLS on port 465
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

export const sendMail = async (email: string, subject: string, content: string): Promise<void> => {
    try {
        const mailOptions = {
            from: `"Brando London" <${process.env.SMTP_MAIL}>`,
            to: email,
            subject,
            html: content
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: parseInt(process.env.SMTP_PORT!), // Ensure the port is a number
//     secure: true, // Use true for SSL/TLS on port 465
//     auth: {
//         user: process.env.SMTP_MAIL,
//         pass: process.env.SMTP_PASSWORD
//     }
// });

// export const sendMail = async (email:any, subject:any, content:any) => {

//     try {
//         const mailOptions = {
//             from:  `"Brando London" <${process.env.SMTP_MAIL}>`,
//             to: email,
//             subject: subject,
//             html: content
//         };

//         await transporter.sendMail(mailOptions);
        
//     } catch (error) {
//         console.error("Error sending email:", error);
//     }
// };

// module.exports = {
//     sendMail
// };