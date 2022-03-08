const {Router} = require('express');
const router = Router();
const controladores = require('../controllers/category');

//rutas
router.get('/', controladores.getCategorias);//ruta para ver todas las categorias
router.post('/',controladores.agregarCategoria);//ruta para agregar categorias
router.get('/:id', controladores.getCategoriasbyId);//ruta para ver una categoria por id
router.put('/:id',controladores.actualizarCategorias);//ruta para modificar categoria
router.delete('/:id',controladores.eliminarCategoria);//ruta para eliminar categoria

module.exports = router;
