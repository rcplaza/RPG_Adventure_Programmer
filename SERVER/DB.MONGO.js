const mongoose = require('mongoose');


const URI = 'mongodb://localhost:27017/RPG';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => console.log('Database is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;