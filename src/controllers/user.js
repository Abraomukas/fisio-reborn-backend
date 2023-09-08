const userService = require('../services/user');

//* GET ALL USERS
exports.getUsers = async (_req, res)=>{
    const users = await userService.getUsers();

		res.status(200).send(users);
}

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

