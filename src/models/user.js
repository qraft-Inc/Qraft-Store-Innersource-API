import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    userName:{
        type: 'string',
        required: true,
        max: 30,
        min: 3
    },
    email:{
        type: String,
        required: true,
        max: 30,
        min: 3
    },
    password:{
        type: String,
        required: true,
        max: 12,
        min: 6
    },
    Role:{
        type: 'string',
    },
    CreatedDate:{
        type: 'date',
        default: Date.now()
    },
})

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next()
    });
    
const profileSchema = new Schema({
    firstName:{
        type: 'string',
        required: true,
        max: 30,
        min: 3
    },
    lastName:{
        type: 'string',
        required: true,
        max: 30,
        min: 3
    },
    gender:{
        type: 'string',
        required: true,
        max: 30,
        min: 3
    },
    dateOfBirth:{
        type: 'string',
        required: true,
        max: 30,
        min: 3
    },
    email:{
        type: 'string',
        required: true,
        max: 30,
        min: 3
    },
    PhoneNumber:{
        type: 'String',
        required: true,
        max: 30,
        min: 3
    },
    location:{
        type: 'string',
        required: true,
        max: 30,
        min: 3
    },

})

const User =  mongoose.model('User' , UserSchema,profileSchema)

export default User;