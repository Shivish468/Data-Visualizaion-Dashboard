import mongoose from 'mongoose';

const intensitySchema = new mongoose.Schema({
  endYear: String,
  intensity: Number,
  sector: String,
  insight: String,
  url: String,
  startYear: String,
  impact: String,
  added: Date,
  published: Date,
  pestle: String,
  source: String,
  title: String,
});

const Intensity = mongoose.model('Intensity', intensitySchema);

export default Intensity;
