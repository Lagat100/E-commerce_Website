const UserModel = require('../models/User');

class UserService {
    constructor() {
        this.user = UserModel;
    }

    async list_all_users() {
        // list all users in the db,used for admin purposes.
        try {
            const users = await this.user.find({});
            console.log(users);
            return users;
        } catch (err) {
            console.error("Error fetching users", err);
            throw new Error('Internal Server Error');
        }
    }

    async delete_user(userId) {
        // Deletes a specific user from the db,identified by userId.
        try {
            const result = await this.user.deleteOne({ _id: userId }); 
            if (result.deletedCount === 0) {
                throw new Error('User not found');
            }
            return { msg: "User deleted successfully" };
        } catch (err) {
            console.error("Error deleting user", err);
            throw new Error('Internal Server Error');
        }
    }

    async show_user_profile(userId) {
        // Fetches user profile based on userId.
        try {
            const user = await this.user.findOne({ _id: userId });
            if (user === null) { 
                console.log("User not found");
                return { msg: "User not found" };
            }
            console.log(user);
            return user;
        } catch (err) {
            console.error("Error fetching user", err);
            throw new Error('Internal Server Error');
        }
    }
}

module.exports = UserService;