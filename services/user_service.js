const { User } = require('../models');
const CryptoJS = require('crypto-js');
const config = require('../config');

async function createUser (requestUser) {
    try {
        let encryptedPassword = CryptoJS.AES.encrypt(requestUser.password, config.CRYPTO.KEY);

        let user = new User({
            email: requestUser.email,
            password: encryptedPassword.toString()
        });

        return await user.save();
    } catch (error) {
        console.log(`Error: ${error}`);
        return {
            error: error
        }
    }
}


module.exports = {
    createUser
}