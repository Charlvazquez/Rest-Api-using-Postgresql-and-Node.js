const pool = require('../models/db');
const consulta = require('../models/consultas');

//metodo para ver todos las cateogiras hasta el momento
const getCategorias = (req,res)=>{ 
    //declaracion de consulta usando una variable donde esta almacenada el tipo de consulta y metodo a usar
    pool.query(consulta.getCategorias , (error, resultados)=>{
        if(error) throw error;
        res.status(200).json(resultados.rows);
    });   
};

const agregarCategoria = (req,res)=>{
    const{nombre,descripcion} = req.body;
    pool.query(consulta.agregarCategoria,[nombre,descripcion],(error,resultados)=>{
        if(error) throw error;
        res.status(200).send('Categoria agregada exitosamente!');
    });
};
const getCategoriasbyId = (req,res)=>{ 
    const id = parseInt(req.params.id);//constante del campo id
    //declaracion de consulta usando una variable donde esta almacenada el tipo de consulta y metodo a usar
    pool.query(consulta.getCategoriasbyId ,[id], (error, resultados)=>{
        if(error) throw error;
        res.status(200).json(resultados.rows);
    });   
};

const actualizarCategorias = (req,res)=>{
    const id = parseInt(req.params.id);
    const {nombre} = req.body;
    const {descripcion} = req.body;

    pool.query(consulta.getCategoriasbyId,[id],(error,resultados)=>{
        const busqueda = !resultados.rows.length;
        if(busqueda){
            res.status(404).send('Categoria no encontrada');
        }

        pool.query(consulta.actualizarCategorias,[nombre,descripcion,id],(error,resultados)=>{
            if(error)throw error;
            res.status(200).send('Categoria modificada!');
        });
    });
};

const eliminarCategoria = (req,res)=>{
    const id = parseInt(req.params.id);

    pool.query(consulta.getCategoriasbyId, [id],(error,resultados)=>{
        const busqueda = !resultados.rows.length;
        if(busqueda){
            res.status(404).send('Categoria no encontrada');
        }
    pool.query(consulta.eliminarCategoria,[id],(error,resultados)=>{
        if(error)throw error;
        res.status(200).json({message:"Categoria eliminada"});
    });    
    });
};


module.exports={
    getCategorias,
    agregarCategoria,
    getCategoriasbyId,
    actualizarCategorias,
    eliminarCategoria,
};