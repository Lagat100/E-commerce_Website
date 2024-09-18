const express = require('express');
const userRouter = express.Router();
const UserService = require('../controllers/user');
const userService = new UserService();

// List all users
userRouter.get('/api/users', async (req, res) => {
    try {
        const users = await userService.list_all_users();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a specific user by ID
userRouter.delete('/api/user/:userId', async (req, res) => {
    const userId = req.params.userId; 
    try {
        const result = await userService.delete_user(userId);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

// Show a specific user profile by ID
userRouter.get('/api/user/:id', async (req, res) => {
    const userId = req.params.id; 
    try {
        const result = await userService.show_user_profile(userId);
        res.json(result);
    } catch (err) { 
        res.status(500).json({ error: err.message });
    }
});

module.exports = userRouter;