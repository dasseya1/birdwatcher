const mongoose = require('mongoose');

module.exports.connect = (uri) => {
    mongoose.connect(uri);
    // plug in in promise library
    mongoose.Promise = global.Promise;
    
    mongoose.connection.on('error', (err) => {
        console.error(`Mongoose connection error: ${err}`);
    });

    // load models
    require('./user');
}