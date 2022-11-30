import { DataTypes } from 'sequelize';
import sequelize  from './database';

const Item = sequelize.define('item', {
    binId: {
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
},{});

export default Item;