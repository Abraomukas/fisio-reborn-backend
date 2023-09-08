const userModel = require('../models/User');

//* GET ALL USERS
exports.getUsers = async (_req, res) => {
	const users = userModel.find({}).sort({ createdAt: -1 });
	res.status(200).send(users);
};

//* NEW USER
exports.createUser = async (username, email) => {
	try {
		const emailTaken = await userModel.findOne({ email });

		if (emailTaken) {
			throw new Error('You have inserted an invalid email!');
		}

		const newUser = new userModel({ username, email });
		await newUser.save();

		return newUser;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
