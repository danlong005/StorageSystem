import  { User } from '../models'
import CryptoJS from 'crypto-js';
import config from '../config';

async function createUser (requestUser: any) {
    try {
        const encryptedPassword = CryptoJS.AES.encrypt(requestUser.password, config.CRYPTO.KEY);

        const user = new User({
            email: requestUser.email,
            password: encryptedPassword.toString()
        });

        return await user.save();
    } catch (error) {
        console.log(`Error: ${error}`);
        return {
            error
        }
    }
};

export {
    createUser
};