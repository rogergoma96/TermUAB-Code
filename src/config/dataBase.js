const mongoose = require('mongoose');

const URI = 'mongodb://localhost/termUAB-DB-Dev';

mongoose.connect(URI, {
    useNewUrlParser: true
});

module.exports = mongoose;
