/**
 * Contiene las rutas relacionadas a un usuario
 * @module routes/users
 * @version 1.0.1
 * @author Maira Bastidas <maira2121@gmail.com>
 */


//Se declara la variable express para poder utilizarla
var express = require('express');

// Se crea una instancia del router que permitirá crear nuevas rutas.
var router = express.Router();

/* GET users listing. */

/**
 * Esta función declara una ruta con la URL '/users/cool/' que es la solicitada en el taller.
 * 
 * @version 1.0.0
 * @since 1.0.0 
 */

router.get('/cool', function (req, res, next) {
    res.send('¡Eres genial!')
});

//Se exporta el router para importar en otros modulos.
module.exports = router;
