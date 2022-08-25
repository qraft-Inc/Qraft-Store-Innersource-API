import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	firstName: {
		type: String,
		required: true,
		max: 15,
		min: 3,

	},
	lastName: {
		type: String,
		required: true,
		max: 15,
		min: 3,
	},
	gender: {
		type: String,
		required: true,
		max: 6,
		min: 1,
	},

	dateOfBirth: {
		type: dateString,
		required: false,
	},


	phone: {
		type: String,
		required: true,
		max: 10,
		min: 10,
	},
	location: {
		type: String,
		required: true,
		max: 20,
		min: 10,
	},
	profilePicture: {
		type: String
	},
	CreatedDate: {
		type: Date,
		default: Date.now(),
	},

	price: {
		type: Number
	},
	artistType: {
		type: String,
		min: 3,
		max: 30,
	},

	awards: [],
	skills: [],

});


const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
