const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
  resident_name: { type: String },
  gender: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model("Resident", residentSchema);

// Resident - Name, Gender & Age (Belongs to a particular Flat)
