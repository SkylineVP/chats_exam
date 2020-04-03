const {NotFoundError} = require('../utils/errors');
const {User} = require('./../models');
module.exports = async ( req, res, next ) => {
	try {

		const user = await User.findOne({
			_id: req.headers.authorization,
		});
		if (user) {
			req.user = user;
			return next();
		}
		next(new NotFoundError());
	} catch (e) {
		next(e);
	}
};