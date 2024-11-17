// Topics controller
const Topic = require('../models/topics');
const Chapter = require('../models/chapters');

exports.getTopics = async (req, res) => {
  const topics = await Topic.find().populate('chapters');
  res.json(topics);
};

exports.createTopic = async (req, res) => {
  const { title } = req.body;
  const topic = new Topic({ title });
  await topic.save();
  res.status(201).json(topic);
};

exports.addChapter = async (req, res) => {
  const { title } = req.body;
  const chapter = new Chapter({ title });
  await chapter.save();

  const topic = await Topic.findById(req.params.topicId);
  topic.chapters.push(chapter._id);
  await topic.save();

  res.status(201).json(chapter);
};

exports.completeProblem = async (req, res) => {
  const { problemId, userId } = req.body;
  const user = await User.findById(userId);
  if (user) {
    user.completedProblems.push(problemId);
    await user.save();
    res.json({ message: 'Problem marked as completed' });
  } else {
    res.status(404).send('User not found');
  }
};