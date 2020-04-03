const {BadRequestError} = require('../utils/errors');
const {Chat} = require('./../models');

module.exports.createChat = async ( req, res, next ) => {
	try {

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
};
module.exports.getChat = async ( req, res, next ) => {
	try {
		const chat = await Chat.findOne({_id: req.body.chatId});
		if (chat) {
			req.chat = chat;
			next();
		}
		else {
			res.status(404).send(new Error(`Chat:${req.chatId} Not Found`))
		}
	} catch (e) {
		console.error(e)
	}
};
module.exports.joinToChat = async ( req, res, next ) => {
	try {
		const {chat, headers: {authorization}, user} = req;
		if (!chat.users.includes(authorization)) {
			chat.users.push(authorization);
			user.chats.push(chat._id);
			chat.save();
			user.save();
			res.send('You joined');
		}
	} catch (e) {
		console.error(e)
	}
};