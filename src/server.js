const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const config = require('./config/inUse');

const server = express();
const userRoutes = require('./routes/users');

//* MIDDLEWARE
server.use(express.json());
server.use(morgan('dev'));

//* ROUTES
server.use('/api/users', userRoutes);

//* LOADERS
mongoose
	.connect(config.dbUri)
	.then(() => {
		server.listen(config.port, () => {
			console.log(config);
			console.log('Database connection successful');
			console.log(`Server running on http://${config.domain}:${config.port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});

// server.listen(config.port, () => {
// 	console.log(config);
// 	console.log(`Server running on http://${config.domain}:${config.port}`);
// });
