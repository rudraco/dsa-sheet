// Chapter model
const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  youtubeLink: String,
  leetcodeLink: String,
  articleLink: String,
  level: { type: String, enum: ['Easy', 'Medium', 'Tough'], required: true },
  isCompleted: { type: Boolean, default: false }
});

const ChapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  problems: [ProblemSchema]
});

module.exports = mongoose.model('Chapter', ChapterSchema);