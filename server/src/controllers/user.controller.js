const { BadRequestError } = require('../utils/errors');
const { User } = require('./../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      const preparedUser = user.toObject();
      delete preparedUser.password;
      return res.status(201).send(preparedUser);
    }

    next(new BadRequestError());

  } catch (e) {
    next(e);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
	  const user = await User.findOne({_id: req.id})
	  if (user) {
		  res.send(user);
	  }

  } catch (e) {
    next(e);
  }

};

