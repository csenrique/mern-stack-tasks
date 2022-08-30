const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {mongoose} = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
require('./routs/task.routes')(app);

//static files
//console.log(__dirname + '/public'); para no estar agregando / o \ segun el sistema operativo, se hace co path
//console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')))

//starting the server
app.listen(app.get('port'), ()=> {
    console.log("Server on port: ", app.get('port'));
})