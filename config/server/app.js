const indexRouter = require('../../app/routes/index');
const usersRouter = require('../../app/routes/users');
const express = require('express');

//Configuracion
const app = express();
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;