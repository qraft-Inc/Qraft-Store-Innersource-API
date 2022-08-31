import profileService from '../services/profile.service';

const { findProfile, createProfile, updateProfile } = profileService;

class ProfileController {
    static viewProfile = async (req, res) => {
        const user = req.user;
        console.log(user);
    };

    static UpdateProfile = async (req, res) => {
        const user = req.user;

        const { gender, dob, price_range, profession, location } = req.body;
        const profileData = {
            user: user.id,
            gender,
            dob,
            price_range,
            profession,
            location,
        };
        const query = { user: profileData.user };
        const getProfile = await findProfile(query);

        if (!getProfile) {
            try {
                const profile = await createProfile(profileData);
                res.status(200).send({ message: 'profile created sucess', profile });
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        } else {
            try {
                const newProfile = await updateProfile(getProfile, profileData);
                res.status(200).send({ message: 'profile updated sucess', newProfile });
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        }
    };

    static updateBio = async (req, res) => {
        const user = req.user;
        const userName = user.name;
        let splitedName = userName.split(' ');

        const { firstName, lastName, email, phone, location } = req.body;
        const profileData = {
            user: user.id,
            firstName: firstName || splitedName[0],
            lastName: lastName || splitedName[1],
            email,
            phone,
            location,
        };
        const query = { user: profileData.user };
        const getProfile = await findProfile(query);

        if (!getProfile) {
            try {
                const profile = await createProfile(profileData);
                res.status(200).send({ message: 'profile created sucess', profile });
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        } else {
            try {
                const newProfile = await updateProfile(getProfile, profileData);
                res.status(200).send({ message: 'profile updated sucess', newProfile });
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        }
    };

    static updateSkills = async (req, res) => {
        const user = req.user;
        const { Portofolio, Niche, Social_media, Band_membership } = req.body;
        const profileData = {
            user: user.id,
            Portofolio,
            Niche,
            Social_media,
            Band_membership,
        };
        const query = { user: profileData.user };
        const getProfile = await findProfile(query);

        if (!getProfile) {
            try {
                const profile = await createProfile(profileData);
                res.status(200).send({ message: 'profile created sucess', profile });
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        } else {
            try {
                const newProfile = await updateProfile(getProfile, profileData);
                res.status(200).send({ message: 'profile updated sucess', newProfile });
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        }
    };
}

export default ProfileController;
