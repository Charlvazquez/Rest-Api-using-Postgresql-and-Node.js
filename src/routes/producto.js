const {Router} = require('express');
const router = Router();
const controladores = require('../controllers/controlador_producto');

//rutas
router.get('/', controladores.getProductos);//ruta para ver todas los productos
router.post('/',controladores.agregarProductos);



module.exports = router;
