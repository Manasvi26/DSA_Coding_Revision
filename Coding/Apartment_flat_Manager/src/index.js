const express = require("express");
const app = express();
const connect = require("./configs/db");

app.use(express.json());

const flat = require("./controller/flatController");
const resident = require("./controller/residentController");

app.use("/flat", flat);
app.use("/resident", resident);

app.listen(3333, async function () {
  await connect();
  console.log("Listening in port 3333");
});
