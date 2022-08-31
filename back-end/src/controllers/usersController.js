const userService = require('../services/userService');

const userRegister = async (req, res, next) => {
  console.log('Req Body', req.body);
  try {
    const response = await userService.userRegister(req.body);
    // console.log('response', response);
    if (response.message) {
      const { message, status } = response;
      return res.status(status).json({ message });
    }
    const { token, status } = response;
    res.status(status).json({ token });
  } catch (err) {
    next(err);
  }
};
const usersController = { userRegister };
module.exports = usersController;