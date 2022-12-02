import { User } from '../models';
import CryptoJS from 'crypto-js';
import config from '../config';

async function authenticate(userRequest: any) {
    try {
        const user = await User.findOne({
            where: {
                email: userRequest.email
            }
        });

        const response: any = {};
        response.authenticated = false;
        if (user != null) {
            const decryptedPassword = CryptoJS.AES.decrypt(user.password, config.CRYPTO.KEY);
            if (userRequest.password === decryptedPassword.toString(CryptoJS.enc.Utf8)) {
                response.user = user.email;
                response.id = user.id;
                response.authenticated = true;
            }
        }

        return response;
    } catch (error: any) {
        console.log(`Error: ${error}`);
        return {
            authenticated: false
        }
    }
};


export {
    authenticate
};