import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import sequelize from '../database';
import Item from './item_model';

@Table
class Bin extends Model {
    @Column
    name: string;

    @HasMany(() => Item)
    items: Item[];
};

sequelize.addModels([Bin]);

export default Bin;