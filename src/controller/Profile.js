import profileService from '../services/profile.service';

const { findProfile, createProfile, updateProfile } = profileService;

class ProfileController {
    static viewProfile = async (req, res) => {

        const user = req.user;
        console.log(user)

    };

    static UpdateProfile = async (req, res) => {

        const user = req.user;
        const userName = user.name
        let splitedName = userName.split(" ");

        const { email, gender, dob, price_range, profession, location, Portofolio, Niche, Social_media, Band_membership } = req.body;
        const profileData = {
            user: user.id,
            firstName: splitedName[0],
            lastName: splitedName[1],
            email,
            gender,
            dob,
            price_range,
            profession,
            location,
            Portofolio,
            Niche,
            Social_media,
            Band_membership
        }
        const query = { user: profileData.user }
        const getProfile = await findProfile(query)

        if (!getProfile) {
            try {
                const profile = await createProfile(profileData);
                res.status(200).send({ "message": "profile created sucess", profile })
            } catch (error) {
                res.status(400).send(res.send({ "error": error.message }))
            }
        } else {
            try {
                const newProfile = await updateProfile(getProfile, profileData)
                res.status(200).send({ "message": "profile updated sucess", newProfile })
            } catch (error) {
                res.status(400).send({ "error": error.message })
            }
        }

    };

}

export default ProfileController