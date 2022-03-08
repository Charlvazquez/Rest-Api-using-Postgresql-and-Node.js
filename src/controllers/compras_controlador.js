const pool = require('../models/db');
const consulta = require('../models/consultas');

//metodo para verificar las compras hechas
const getCompras = (req,res)=>{
    pool.query(consulta.getCompras, (error, resultados)=>{
        if(error) throw error;
        res.status(200).json(resultados.rows);
    });
};


module.exports={
    getCompras,
   
};