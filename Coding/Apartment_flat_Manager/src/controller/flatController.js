const express = require("express");
const router = express.Router();
const Flat = require("../models/flatSchema");

router.post("", async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    return res.status(201).send(flat);
  } catch (e) {
    return res.status(400).send({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 2;
    const skip = (page - 1) * size;
    const type_query = req.query.type || "none";
    const sort_number = req.query.sort || "none";

    let flat;
    if (type_query === "none" && sort_number === "none") {
      flat = await Flat.find()
        .populate("resident_id")
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
    } else if (type_query === "none" && sort_number === "ascending") {
      flat = await Flat.find()

        .populate("resident_id")
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
      flat.sort((a, b) => a.flat_no - b.flat_no);
    } else if (type_query === "none" && sort_number === "descending") {
      flat = await Flat.find()
        .populate("resident_id")
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
      flat.sort((a, b) => b.flat_no - a.flat_no);
    } else if (type_query !== "none" && sort_number === "ascending") {
      flat = await Flat.find({ flat_type: type_query })
        .populate("resident_id")
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
      flat.sort((a, b) => a.flat_no - b.flat_no);
    } else if (type_query !== "none" && sort_number === "descending") {
      flat = await Flat.find({ flat_type: type_query })
        .populate("resident_id")
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
      flat.sort((a, b) => b.flat_no - a.flat_no);
    } else if (type_query !== "none" && sort_number === "none") {
      flat = await Flat.find({ flat_type: type_query })
        .populate("resident_id")
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
    }
    return res.status(201).send(flat);
  } catch (e) {
    return res.status(400).send({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
