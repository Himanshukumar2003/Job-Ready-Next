// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ message: "Only POST requests allowed" });
//     }

//     const { name, dob, email, phone, nationality, message } = req.body;

//     // Request body check
//     if (!name || !dob || !email || !phone || !nationality || !message) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     try {
//         let transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,  // ✅ Fix: Proper env variable
//                 pass: process.env.EMAIL_PASS,  // ✅ Fix: Proper env variable
//             },
//         });

//         let mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: "receiver@example.com",  // ✅ Fix: Change to your receiver email
//             subject: "New Contact Form Submission",
//             text: `
//                 Name: ${name}
//                 Date of Birth: ${dob}
//                 Email: ${email}
//                 Phone: ${phone}
//                 Nationality: ${nationality}
//                 Message: ${message}
//             `,
//         };

//         await transporter.sendMail(mailOptions);

//         return res.status(200).json({ message: "Email sent successfully" });

//     } catch (error) {
//         return res.status(500).json({ message: "Error sending email", error: error.message });
//     }
// }
