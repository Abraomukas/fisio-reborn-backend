const userService = require('../services/user');

//* GET ALL USERS
const getUsers = async (_req, res) => {
	const users = await userService.getUsers();

	res.status(200).send(users);
};

//* GET ONE USER
const getUser = async (req, res) => {
	const { email } = req.params;

	const user = await userService.getUserWthEmail(email);

	if (!user) {
		return res.status(404).json({ message: 'User not found!' });
	}

	res.status(200).send(users);
};

//* NEW USER
const createUser = async (req, res) => {
	try {
		const { username, email } = req.body;
		const newUser = await userService.createUser(username, email);

		res.status(201).json(newUser);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: err.message });
	}
};

module.exports = { getUser, getUsers, createUser };