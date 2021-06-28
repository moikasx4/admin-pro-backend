require('dotenv').config();

const express = require('express');
const { dbConection } = require('./database/config');
const cors = require.cors('cors');

//Crea el servidor express
const app = express();

//Configuracion de Cors
app.use(cors());

//moi_user
//pGeif32fPLuMPI27
//Conexion Base de Datos
dbConection();
console.log(process.env);



//Ruta
app.get('/', (req, resp) => {
    resp.json({
        ok: true,
        msg: 'Hola mundo'
    })
});
app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});