// Rutas para amigo

const express = require("express");
// llamamos al router de express
const router = express.Router();

// creamos las rutas
// api/amigos
router.post("/", () => {
    console.log("Creando amigo...");
});
// router.get("/test-de-controlador", ArticleController.test);

module.exports = router;