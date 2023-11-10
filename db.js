const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

// habilitamos las promesas para MongoDB
mongoose.Promise = global.Promise;

const conectarDB = async () => {
    try {
        //mongoose.connect('url', {opciones})
        await mongoose.connect(process.env.DB_MONGO, {
            // Obsoletas
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false
        })
        console.log("La conexión a la BD se ha realizado!!!");

    } catch (error){
        console.log(error);
        // Detener la app
        process.exit(1);
    }
}

module.exports = conectarDB;