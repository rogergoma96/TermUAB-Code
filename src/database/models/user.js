const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// Define userSchema
const userSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
});

// Define schema methods
userSchema.methods = {
    // Encrypt password
    generateHash: plainTextPassword  => {
        return bcrypt.hashSync(plainTextPassword, bcrypt.genSaltSync(8, null));
    },
    // Validate password
    validatePassword: function(password) {
        return bcrypt.compareSync(password, this.password)
    }
};

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======');
        next();
    } else {
        console.log('models/user.js hashPassword in pre save');
        this.password = this.generateHash(this.password);
        next();
    }
});

module.exports = mongoose.model('User', userSchema);
