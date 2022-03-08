const getCategorias = "SELECT * FROM categoria";
const agregarCategoria = "INSERT INTO categoria(nombre,descripcion) VALUES($1,$2)";
const getCategoriasbyId = "SELECT * FROM categoria WHERE id = $1";
const actualizarCategorias = "UPDATE categoria SET nombre=$1, descripcion=$2 WHERE id=$3";
const eliminarCategoria = "DELETE FROM categoria WHERE id = $1";
const getProductos = "SELECT * FROM producto";
const agregarProductos = " INSERT INTO producto(nombre_producto,descripcion,precio,codigocategoria) VALUES($1,$2,$3,$4)";
const getCompras = "SELECT producto.id,producto.nombre_producto, categoria.nombre, producto.precio FROM producto INNER JOIN categoria ON categoria.id = producto.codigocategoria ";


module.exports = {
    getCategorias,
    agregarCategoria,
    getCategoriasbyId,
    actualizarCategorias,
    eliminarCategoria,
    getProductos,
    agregarProductos,
    getCompras,
};