const config = {
    CRYPTO: {
        KEY: process.env.CRYPTO_KEY || 'this is junk'
    },
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET || 'junk',
    DB: {
        NAME: process.env.DB_NAME || 'storage',
        USER: process.env.DB_USER || 'postgres',
        PASSWORD: process.env.DB_PASSWORD || 'password',
        HOST: process.env.DB_HOST || 'localhost',
        POOL: {
            MAX: process.env.DB_POOL_MAX || 10,
            MIN: process.env.DB_POOL_MIN || 5,
            ACQUIRE: process.env.DB_POOL_ACQUIRE || 30000,
            IDLE: process.env.DB_POOL_IDLE || 10000
        }
    }
};

module.exports = config;