const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
  flat_type: { type: String },
  block: { type: String },
  flat_no: { type: Number },
  resident_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resident",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Flat", flatSchema);
