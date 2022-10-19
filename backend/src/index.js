import './models/Pokemons.js';
import './models/Types.js'
import './models/PokemonsType.js';
import './models/PokemonsEvolve.js';

import app from './app.js';
import { sequelize } from "./database/config.js";

const port = 3000;

const main = async () => {
    try {
        await sequelize.sync({force: true});
        app.listen(port, () => {
            console.log(`listening port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();