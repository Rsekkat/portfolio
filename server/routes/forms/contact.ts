import nodemailer from "nodemailer";

const EMAIL = "rayan.sekkat@gmail.com";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

export default defineEventHandler(async (event) => {
  const body = JSON.parse(await readBody(event));

  const from = body.email;
  const subject = body.subject;
  const text = body.message;
  const to = EMAIL;

  const mailOptions = { from, to, subject, text };

  sendMail(mailOptions);

  return true;
});

const sendMail = (mailOptions: any) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: true, 
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD,
    },
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
