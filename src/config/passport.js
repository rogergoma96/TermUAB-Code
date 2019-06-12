const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function(err, user) {
           done(err, user);
        });
    });

    // User signup
    passport.use('user-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        User.findOne({ 'user.email': email }, function(err, user) {
            if(err) { return done(err); }
            if(user) {
                return done(null, false, req.flash('signupMessage', 'This email is already taken'));
            } else {
                var newUser = new User();
                newUser.user.firstName = req.body.firstName;
                newUser.user.lastName = req.body.lastName;
                newUser.user.email = email;
                newUser.user.password = newUser.generateHash(password);
                newUser.save(function (err) {
                    if(err) { throw err; }
                    return done(null, newUser);
                });
            }
        });
    }));

    // User login
    passport.use('user-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        function (req, email, password, done) {
            User.findOne({ 'user.email': email }, function(err, user) {
                if(err) { return done(err); }
                if(!user) {
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }
                if(!user.validatePassword(password)) {
                    return done(null, false, req.flash('loginMessage', 'Wrong password.'))
                }
                return done(null, user);
            });
        }));
};
