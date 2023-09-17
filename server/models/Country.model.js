import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  end_year: String,       // End year of the event
  intensity: Number,      // Intensity of the event
  sector: String,         // Sector associated with the event
  topic: String,          // Topic of the event
  insight: String,        // Insight or description of the event
  url: String,            // URL related to the event
  region: String,         // Region associated with the event
  start_year: Number,     // Start year of the event
  impact: String,         // Impact of the event
  added: String,          // Date and time when the event was added
  published: String,      // Date and time when the event was published
  country: String,        // Country associated with the event
  relevance: Number,      // Relevance of the event
  pestle: String,         // PESTLE category of the event
  source: String,         // Source of the event
  title: String,          // Title of the event
  likelihood: Number      // Likelihood of the event
});

const Country = mongoose.model('Country', countrySchema);

export default Country;
