const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({ message: 'User registered', username, password });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.json({ message: 'User logged in', username, password });
});

module.exports = router;
