import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: {
		type: String,
		required: true,
		max: 30,
		min: 3,
	},
	email: {
		type: String,
		required: true,
		max: 30,
		min: 3,
	},
	password: {
		type: String,
		required: true,
		max: 12,
		min: 6,
	},
    profilePicture:{
        type: String
    },
    price: {
        type: Number
    },
	artistType: {
		type: String,
		min: 3,
		max: 30,
	},
	location: {
		type: String,
		min: 3,
		max: 30,
	},
	awards: [],
	skills: [],

	Role: {
		type: String,
		enum: ['client', 'artist', 'admin'],
		required: true,
	},
	CreatedDate: {
		type: Date,
		default: Date.now(),
	},
});

UserSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

const User = mongoose.model('User', UserSchema);

export default User;
