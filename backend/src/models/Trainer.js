// Trainer.js
const mongoose = require("mongoose");


const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true,default: "" },
  institution: { type: String, required: true,default: "" },
  year: { type: Number, required: true,default: "" },
});

// Define Links and URLs schema
const linksSchema = new mongoose.Schema({
  linkedInUrl: { type: String,default: "" },
  resumeUrl: { type: String,default: "" },
});

const trainerSchema = new mongoose.Schema({
  username: { type: String, required: true,unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true,unique: true },
  contactNumber: { type: String, required: true },
  skills: { type: String, required: true },
  city: { type: String, required: true },
  chargePerDay: { type: String, required: true },
  trainerType: { type: String, default: "" },
  openToTravel: { type: Boolean,default: false },
  deliveryMode: { type: Boolean,default: false},
  clients: { type: String,default: "" },
  education: [educationSchema], // Array of education objects
  links: [linksSchema], // Nested schema for links and URLs
  role: { type: String, default: "trainer" },
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
