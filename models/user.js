import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: false, required: true},
    email: {type: String, unique: true, required: true},
    bio: {type: String, unique: true, required: false},
    followers: [{type: String}],
    following: [{type: String}]
}, {
    collection: 'Users'
});

const db = mongoose.connection.useDb('Backend');
const User = db.model('User', UserSchema);

export default User;
