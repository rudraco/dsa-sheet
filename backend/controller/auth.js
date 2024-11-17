// Authentication controller
const User = require('../models/users');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res.status(201).json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign({ id: user._id }, 'secretkey'); // Use environment variable for secret
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
};