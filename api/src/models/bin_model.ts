import { DataTypes } from 'sequelize';
import sequelize from './database';

import Item from './item_model';
import User from './user_model';

const Bin = sequelize.define('bin', {
    name: {
        type: DataTypes.STRING
    }
},{});

// associations
Bin.hasMany(Item);
User.hasMany(Bin);

export default Bin;