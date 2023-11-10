// Cargar modulos de node para crear el servidor
const express = require('express');
const bodyParser = require("body-parser");
// Cargar ficheros rutas
const amigo_routes = require("./routes/amigo");

// Ejecutar express (http)
const app = express();


// Middlewares

// usar el body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Añadir prefijos a rutas / Cargar Rutas
app.use("/api/amigos", amigo_routes);

app.get('/probando', (req, res) => {
    console.log('Hola mundo!!!');
    return res.status(200).send(
        `
        <ul>
            <li>NodeJS</li>
            <li>Angular</li>
            <li>React</li>
            <li>Vue</li>
        </ul>
        `
    );
});

// Exportar modulo (fichero actual)
module.exports = app;