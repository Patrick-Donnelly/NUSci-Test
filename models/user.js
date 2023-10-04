import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: true},
    email: {type: String, unique: true, required: true},
    bio: {type: String, unique: true}
}, {
    collection: 'users'
});

const db = mongoose.connection.useDb('users');
const User = db.model('User', UserSchema);

export default User;
