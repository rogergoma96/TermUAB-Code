const mongoose = require('mongoose');

// Path mongoDB
const URI = 'mongodb://localhost/termUAB-DB-Dev';

mongoose.connect(URI, {
    useNewUrlParser: true
});

module.exports = mongoose;
