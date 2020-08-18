const express = require("express");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");
const { restart } = require("nodemon");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res, next) => {
  res.send("API STATUS: RUNNING");
  next();
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "prechieb@gmail.com",
    from: "10537073@mydbs.ie",
    email: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
  };
  sendGrid
    .send(msg)
    .then(() => {
      res.send.json({
        success: true,
      });
    })
    .catch((err) => {
      res.send({
        success: false,
      });
    });
});

app.listen(5000);
