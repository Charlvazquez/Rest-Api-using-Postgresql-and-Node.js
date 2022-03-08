const {Router} = require('express');
const router = Router();
const controladores = require('../controllers/compras_controlador');

//rutas
router.get('/', controladores.getCompras);//ver objetos comprados




module.exports = router;
