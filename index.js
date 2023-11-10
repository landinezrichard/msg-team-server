const app = require("./app");
const port = 3900;
const conectarDB = require("./db");

//crear servidor y escuchar peticiones HTTP
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
});

//conexion BD
conectarDB();