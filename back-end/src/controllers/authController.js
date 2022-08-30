require('dotenv').config();
const authService = require('../services/authService');

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ token });    
  } catch (err) {
    next(err);
  }
};
