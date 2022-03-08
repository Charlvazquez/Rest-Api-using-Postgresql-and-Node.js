const pool = require('../models/db');
const consulta = require('../models/consultas');

const getProductos = (req,res)=>{
    pool.query(consulta.getProductos, (error, resultados)=>{
        if(error) throw error;
        res.status(200).json(resultados.rows);
    });
};

const agregarProductos = (req,res)=>{
    const{nombre_producto,descripcion,precio,codigocategoria} = req.body;
    pool.query(consulta.agregarProductos,[nombre_producto,descripcion,precio,codigocategoria],(error,resultados)=>{
        if(error) throw error;
        res.status(200).send('Producto agregado exitosamente!');
    });
}

module.exports = {
    getProductos,
    agregarProductos,

};