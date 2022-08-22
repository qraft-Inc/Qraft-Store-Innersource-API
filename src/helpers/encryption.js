import bcrypt from 'bcrypt';

class Protection {
    static checkPassword(password, hashed) {
        return bcrypt.compare(password, hashed);
    }
}

export default Protection;
