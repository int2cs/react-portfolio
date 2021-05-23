const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  languages: { type: Array, require: true },
  like: Number,
  link: { type: String, require: false },
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
