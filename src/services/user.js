const userModel = require('../models/User');

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
