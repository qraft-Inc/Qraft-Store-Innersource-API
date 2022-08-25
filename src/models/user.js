import mongoose from 'mongoose';

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
		max: 30,
		min: 3,
	},

    googleId: {
        type: String
    },

	linkedinId: {
		type: String
	},
	twitterId:{
		type: String
	},
	
	password: {
		type: String,
		max: 12,
		min: 6,
	},
    profilePicture:{
        type: String
    },
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

const User = mongoose.model('User', UserSchema);

export default User;
