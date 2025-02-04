const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv");

dotenv.config();

//send mail from test account
const signup = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let msg = {
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Registered successfully", // plain text body
    html: "<b>Successfully registered with us!!</b>",
  };

  transporter
    .sendMail(msg)
    .then((info) => {
      return res.status(201).json({
        message: "recieve email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ message: error });
    });
};

//sending mail from real account
const getbill = async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Invalid email address" });
  }

  let config = {
    service: "gmail",
    auth: {
      user: "hemlet27store@gmail.com",
      pass: "jxxxmfthoueiykms",
    },
  };
  let transporter = nodemailer.createTransport(config);
  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Hemlet E-Commerce Store",
      link: "https://mailgen.js/",
    },
  });
  let items = [
    {
      item: "SmartWatch 5 Pro",
      description: "Affordable and feature-packed smartwatch",
      price: 38.88,
    },
    {
      item: "Ear-Buds Max",
      description: "Great quality at a budget price",
      price: 28.9,
    },
    {
      item: "Nike AIR Jordans",
      description: "Classy and stylish shoes",
      price: 138.5,
    },
  ];

  // Calculate total bill
  let totalBill = items.reduce((sum, item) => sum + item.price, 0);

  // Format items for Mailgen
  let formattedItems = items.map((item) => ({
    item: item.item,
    description: item.description,
    price: `$${item.price.toFixed(2)}`,
  }));

  // Add total bill as a final row
  formattedItems.push({
    item: "",
    description: "Grand Total",
    price: `$${totalBill.toFixed(2)}`,
  });

  let response = {
    body: {
      name: email,
      intro: `Hello, ${email.split("@")[0]}! 🎉`,
      title: "Your Purchase Invoice 🧾",
      table: {
        data: formattedItems,
      },
      outro:
        "Thank you for shopping with Hemlet E-Commerce Store! We appreciate your business and look forward to serving you again. 🚀",
    },
  };
  let mail = MailGenerator.generate(response);
  let msg = {
    from: "random@gmail.com",
    to: email,
    subject: "Registration Successful",
    html: mail,
  };
  try {
    await transporter.sendMail(msg);
    res.status(201).json({ msg: "Registration email sent successfully" }); 
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error: error });
  }
};

module.exports = { signup, getbill };
