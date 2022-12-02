import { Table, Model, Column } from 'sequelize-typescript';
import sequelize  from '../database';

@Table
class Item extends Model {
    @Column
    binId: bigint;

    @Column
    name: string;

    @Column
    image: string;
}

sequelize.addModels([Item]);

export default Item;