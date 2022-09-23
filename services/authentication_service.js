const { User } = require('../models');
const CryptoJS = require('crypto-js');
const config = require('../config');

async function authenticate(userRequest) {
    try {
        let user = await User.findOne({
            where: {
                email: userRequest.email
            }
        });

        let response = {};
        if (user != null) {
            let decryptedPassword = CryptoJS.AES.decrypt(userRequest.password, config.CRYPTO.KEY);
            if (userRequest.password == decryptedPassword) {
                response.user = user.email;
                response.id = user.id;
            }
        }
        response.authenticated = (user != null);

        return response;
    } catch (error) {
        console.log(`Error: ${error}`);
        return {
            authenticated: false
        }
    }
}

module.exports = {
    authenticate,
}