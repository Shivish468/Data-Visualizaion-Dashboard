import mongoose from "mongoose";

const yearSchema = new mongoose.Schema({
  end_year: Number, // Change to Number type to store the year
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number, // Change to Number type to store the year
  impact: String,
  added: Date, // Change to Date type to store the date and time
  published: Date, // Change to Date type to store the date and time
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const Year = mongoose.model('Year', yearSchema);

export default Year;
