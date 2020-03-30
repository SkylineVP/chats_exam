const {BadRequestError} = require('../utils/errors');
const {Chat} = require('./../models');

module.exports.createChat = async ( req, res, next ) => {
	try {
		console.log(req.headers.authorization);
		const chat = await Chat.create({
			...req.body,
			owner: req.headers.authorization
		});
		if (chat) {
			req.chat = chat;
			return next();
		}
		next(new BadRequestError());
	} catch (e) {
		console.log(e);
		next(e);
	}
};
module.exports.getChats = async ( req, res, next ) => {
	try {
		const chats = await Chat.find();
		if (chats) {
			return res.send(chats)
		}
	} catch (e) {
		next(e);
	}
}