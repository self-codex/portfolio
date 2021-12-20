require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const PORT = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

const transporet = nodemailer.createTransport({
  service: "gmail",
  // auth: {
  //   user: cred.auth.user,
  //   pass: cred.auth.pass,
  // },
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASS,
  },
});

app.post("/mail", async (req, res) => {
  const { name, email, subject, company, message } = req.body;

  try {
    await transporet.sendMail({
      // from: cred.auth.user,
      // to: cred.auth.user,
      from: process.env.USER_MAIL,
      to: process.env.USER_MAIL,
      subject: subject,
      html: `<h3>Sender Name: ${name}</h3><br/> <h3>Company Name: ${company}</h3><br/> <h3>Mail Address: ${email}</h3><br/> ${message}`,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`server running is port ${PORT}`));
