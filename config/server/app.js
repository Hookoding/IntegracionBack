const indexRouter = require('../../app/routes/index');
const usersRouter = require('../../app/routes/users');
const sendMailRouter = require('../../app/routes/send-mail');
const express = require('express');

//Configuracion
const app = express();
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mail', sendMailRouter);

module.exports = app;