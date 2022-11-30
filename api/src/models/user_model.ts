import { DataTypes } from 'sequelize';
import sequelize  from './database';


const User = sequelize.define('user', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},{});

export default User;