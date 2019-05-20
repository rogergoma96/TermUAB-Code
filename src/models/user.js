const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    local: {
       email: String,
       password: String,
    },
    facebook: {
        email: String,
        password: String,
        id: String,
        token: String,
    },
    google: {
        email: String,
        password: String,
        id: String,
        token: String,
    },
    twitter: {
        email: String,
        password: String,
        id: String,
        token: String,
    }
});

// Encrypt password
userSchema.methods.generateHash = function (passport) {
    return bcrypt.hashSync(passport, bcrypt.genSaltSync(8), null);
};

// Validate password
userSchema.methods.validatePassword = function (passport) {
  return bcrypt.compareSync(passport, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
