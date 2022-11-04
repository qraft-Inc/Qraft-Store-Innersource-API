import profileService from '../services/profile.service';

const { findAllProfile, createProfile, updateProfile } = profileService;

class Freelancerslists{
    static getAllFreelancers = async(req,res)=>{
        const load = await findAllProfile()
        const profiles = load.filter(profile=> profile.user.Role === 'artist')
        res.status(200).send({message:"list of Freelancers", data: profiles})
    }

}
export default Freelancerslists