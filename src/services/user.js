const userModel = require('../models/User');

//* GET ALL USERS
const getUsers = async () => {
	const users = userModel.find({}).sort({ createdAt: -1 });

	return users;
};

//* GET ONE USER
const getUser = async (email) => {
	const user = userModel.findOne({ email });

	if (!user) {
		throw new Error('User not found!');
	}

	return user;
};

//* NEW USER
const createUser = async (username, email) => {
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

module.exports = { getUsers, getUser, createUser };
