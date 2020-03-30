const router = require('express').Router();
const {saveProfilePicture} = require('./../middleware/multer.js');
const userController = require('../controllers/user.controller.js');
const findUserByLogin = require('./../middleware/findUserByLogin.js');
const comparePassword = require('./../middleware/comparePassword.js');
const chatController = require("../controllers/chat.controller");

router.post('/sign_up',
	saveProfilePicture,
	( req, res, next ) => {
		req.body.profilePicture = req.file.filename;
		next();
	},
	userController.createUser);

router.post('/login',
	findUserByLogin,
	comparePassword,
	( req, res ) => res.send(req.user),
);

router.post('/chat',
	chatController.createChat,
	( req, res ) => res.send(req.chat));
router.get('/chats', chatController.getChats);

module.exports = router;