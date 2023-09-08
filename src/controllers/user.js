const userService = require('../services/user');

//* NEW USER
exports.createUser = async (req, res) => {
	try {
		const { username, email } = req.body;
		const newUser = await userService.createUser(username, email);

		res.status(201).json(newUser);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: err.message });
	}
};
