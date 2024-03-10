const express = require("express"); 
const config = require('./config'); 
const cors = require('cors');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');
const auth = require('./modulos/auth/rutas');

const error = require('./red/errors');

const morgan = require("morgan");

const app = express(); 

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

//Middleware
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Config
app.set('port', config.app.port)

//Rutas
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios)
app.use('/api/auth', auth)
app.use(error);

module.exports = app;
