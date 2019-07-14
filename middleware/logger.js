const moment = require('moment');

const logger = (req, res, next) => {
	console.log(
		`${req.protocol}://${req.get('host')}${
			req.originalUrl
		} : ${moment.utc()}`
	);
	next();
};

module.exports = logger;
