//Variables de entorno
require('dotenv').config();

//Importar configuracion
const app = require('./config/server/app');
require('./config/database/database');

const main = async () => {
    await app.listen(app.get('port'));
    console.log(`Servidor corriendo en ${app.get('port')}`);
}

main();