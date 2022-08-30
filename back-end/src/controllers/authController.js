require('dotenv').config();
const authService = require('../services/authService');

exports.login = async (req, res, next) => {
  try {
    const infos = await authService.login(req.body);
    res.status(200).json(infos);    
  } catch (err) {
    next(err);
  }
};
