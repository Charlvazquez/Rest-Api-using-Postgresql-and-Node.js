const express = require('express');
const app = express();
const morgan = require('morgan');
const categoriaRuta = require('./src/routes/categorias');
const produdctoRuta = require('./src/routes/producto');
const comprasRuta = require('./src/routes/compras');
const port = 8800;

//middleware
app.use(morgan('common'));
app.use(express.json());// middleware para leer archivos json


//ruta para usar ruta estudiantes puedes poner escribirla como que desees.
app.use('/api/v1/categoria', categoriaRuta);
app.use('/api/v1/producto', produdctoRuta);
app.use('/api/v1/compras-hechas',comprasRuta);


//puerto de servidor
app.listen(port, ()=> console.log(`servidor en puerto ${port}`));