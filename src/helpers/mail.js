import nodemailer from "nodemailer";
import { config } from "dotenv";

config();
console.log(process.env.APP_PASSWORD);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "khkhamidullo@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

export const sendMail = (to, subject, text) => {
  transporter.sendMail(
    {
      from: "khkhkhkhamidullo@gmail.com",
      to,
      subject,
      text,
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};
