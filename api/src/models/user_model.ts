import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import sequelize from '../database';
import Bin from './bin_model';
@Table
class User extends Model {
    @Column
    email: string;

    @Column
    password: string;

    @HasMany(() => Bin)
    bins: Bin[];
}

sequelize.addModels([User]);

export default User;