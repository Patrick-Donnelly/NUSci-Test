import Connection from '../db/connection.js';
import User from '../models/user.js';

export default class UserAccessor {
    static async getUser(username) {
        try {
            await Connection.open('Backend');
            const user = await User.findOne({ username: username });
            return user;
        } catch (e) {
            throw e;
        }
    }
    
    static async getAllUsers() {
        try {
            await Connection.open('Backend');
        const users = [];
            for await (const doc of User.find()) {
                users.push(doc);
            }
            return users;
        } catch (e) {
            throw e;
        }
    }

    static async createUser(userDoc) {
        try {
            await Connection.open('Backend');
            const user = await User.create(userDoc);
            return user;
        } catch (e) {
            throw e;
        }
    }

    static async addFollower(userWhoFollowed, userToFollow) {
        try {
            await Connection.open('users');
            const follower = await UserAccessor.getUser(userWhoFollowed);
            const followed = await UserAccessor.getUser(userToFollow);

            const followerList = follower.following;
            followerList.push(userToFollow);
            
            const followedList = followed.followers;
            followedList.push(userWhoFollowed);

            await User.findOneAndUpdate({ username: userWhoFollowed }, {following: followerList });
            await User.findOneAndUpdate({ username: userToFollow }, { followers: followedList });
        } catch (e) {
            throw e;
        }
    }
}
