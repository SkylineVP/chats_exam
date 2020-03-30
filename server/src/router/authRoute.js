const express = require("express");
const {Unauthorized} = require('../utils/errors');
const authenticationRoute = express.Router();
authenticationRoute.use('/', ( req, res, next ) => {
	if (req.headers.authorization) {
		next();
	}
	else {
		next(new Unauthorized())
	}
});

module.exports = authenticationRoute;