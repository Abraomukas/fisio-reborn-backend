const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', (_req, res) => {
	res.json({ message: 'GET all users' });
});

router.get('/:id', (req, res) => {
	res.json({ message: 'GET one user' });
});

router.post('/', userController.createUser);

router.delete('/:id', (req, res) => {
	res.json({ message: 'DELETE one user' });
});

router.patch('/:id', (req, res) => {
	res.json({ message: 'PATCH one user' });
});

module.exports = router;
