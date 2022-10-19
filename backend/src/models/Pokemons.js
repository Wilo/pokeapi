import { DataTypes } from "sequelize";
import {sequelize} from '../database/config.js';

export const Pokemons = sequelize.define('pokemons', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(140)
    },
    description: {
        type: DataTypes.TEXT
    },
    height: {
        type: DataTypes.FLOAT
    },
    weight: {
        type: DataTypes.FLOAT
    },
    image: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: false
});