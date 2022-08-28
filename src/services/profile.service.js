import Profile from '../models/profile';

class profileService {
	static createProfile = async (data) => {
		const profile = new Profile(data);
		try {
			await profile.save();
			return profile;
		} catch (error) {
			throw new Error(error);
		}
	};

	static findProfile = async (query) => {
		const profile = await Profile.findOne(query);
		if (profile) return profile;
	};

    static updateProfile = async (prevProfile, updatedProfile) => {
        Object.assign(prevProfile, updatedProfile);
        return await prevProfile.save();
    }
}

export default profileService;
