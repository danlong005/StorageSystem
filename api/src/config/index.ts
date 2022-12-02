interface ICryptoConfig {
    KEY: string;
};

interface IDbConfigPool {
    MAX: number;
    MIN: number;
    IDLE: number;
    ACQUIRE: number;
};

interface IDbConfig {
    NAME: string;
    USER: string;
    PASSWORD: string;
    HOST: string;
    POOL: IDbConfigPool;
};

interface IConfig {
    CRYPTO: ICryptoConfig;
    PORT: number;
    SECRET: string;
    DB: IDbConfig;
};

const config : IConfig = {
    CRYPTO: {
        KEY: process.env.CRYPTO_KEY || 'this is junk'
    },
    PORT: parseInt(process.env.PORT, 10) || 3000,
    SECRET: process.env.SECRET || 'junk',
    DB: {
        NAME: process.env.DB_NAME || 'storage',
        USER: process.env.DB_USER || 'postgres',
        PASSWORD: process.env.DB_PASSWORD || 'password',
        HOST: process.env.DB_HOST || 'localhost',
        POOL: {
            MAX: parseInt(process.env.DB_POOL_MAX, 10) || 10,
            MIN: parseInt(process.env.DB_POOL_MIN, 10) || 5,
            ACQUIRE: parseInt(process.env.DB_POOL_ACQUIRE, 10) || 30000,
            IDLE: parseInt(process.env.DB_POOL_IDLE, 10) || 10000
        }
    }
};

export default config;