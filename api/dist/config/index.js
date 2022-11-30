"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
;
;
const config = {
    CRYPTO: {
        KEY: process.env.CRYPTO_KEY || 'this is junk'
    },
    PORT: parseInt(process.env.PORT) || 3000,
    SECRET: process.env.SECRET || 'junk',
    DB: {
        NAME: process.env.DB_NAME || 'storage',
        USER: process.env.DB_USER || 'postgres',
        PASSWORD: process.env.DB_PASSWORD || 'password',
        HOST: process.env.DB_HOST || 'localhost',
        POOL: {
            MAX: parseInt(process.env.DB_POOL_MAX) || 10,
            MIN: parseInt(process.env.DB_POOL_MIN) || 5,
            ACQUIRE: parseInt(process.env.DB_POOL_ACQUIRE) || 30000,
            IDLE: parseInt(process.env.DB_POOL_IDLE) || 10000
        }
    }
};
exports.default = config;
//# sourceMappingURL=index.js.map