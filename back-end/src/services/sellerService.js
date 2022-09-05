const { User } = require('../database/models');
const AppError = require('../helpers/appError');

exports.getAll = async () => {
  try {
    const sellers = await User.findAll(
      {
        where: { role: 'seller' }, 
      },
      );
    return sellers;
  } catch (err) {
    throw new AppError(`Error DB: ${err.message}`, 500);
  }
};
