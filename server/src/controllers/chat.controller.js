const {BadRequestError} = require('../utils/errors');
const {Chat} = require('./../models');

module.exports.createChat = async ( req, res, next ) => {
	try {

		const chat = await Chat.create(req.body);
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