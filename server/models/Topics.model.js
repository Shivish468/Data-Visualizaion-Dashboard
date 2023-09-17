import mongoose from "mongoose";

const topicsSchema = new mongoose.Schema({
  end_year: String, // end_year field from the data
  intensity: Number, // intensity field from the data
  sector: String, // sector field from the data
  topic: String, // topic field from the data
  insight: String, // insight field from the data
  url: String, // url field from the data
  region: String, // region field from the data
  start_year: String, // start_year field from the data
  impact: String, // impact field from the data
  added: String, // added field from the data
  published: String, // published field from the data
  country: String, // country field from the data
  relevance: Number, // relevance field from the data
  pestle: String, // pestle field from the data
  source: String, // source field from the data
  title: String, // title field from the data
  likelihood: Number // likelihood field from the data
});

const Topics = mongoose.model('Topics', topicsSchema);

export default Topics;