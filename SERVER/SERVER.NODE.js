const express = require('express');
const game = express();

const morgan = require('morgan');

const { mongoose } = require('./DB.MONGO');

// Configuraciones
game.set('port', process.env.PORT || 3000);

// Middelwares
game.use(morgan('dev'));
game.use(express.json());

// Routes


// Levantar Server
game.listen(game.get('port'), () => {
    console.log('Server on port: ' + game.get('port'));
});