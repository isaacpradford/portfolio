const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const cors = require("cors");

const app = express();

app
  .use(cors())
  .use(bodyParser.json())
  .use("/", require("./routes"))
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://iradford.onrender.com/"
    );
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(204);
    next();
  });

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    const server = app.listen(5500);
    console.log(`Connected to DB and listening on 5500`);
  }
});

module.exports = { app };
