const express = require("express");
const router = express.Router();
const Resident = require("../models/residentSchema");

router.post("", async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    return res.status(201).send(resident);
  } catch (e) {
    return res.status(400).send({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const resident = await Resident.find().lean().exec();
    return res.status(201).send(resident);
  } catch (e) {
    return res.status(400).send({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
