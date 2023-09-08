require('dotenv').config();

const environment = process.env.ENVIRONMENT || 'DEVELOPMENT';

let config;
switch (environment) {
	case 'PRODUCTION':
		config = require('./production');
		break;

	default:
		config = require('./development');
}

module.exports = config;
