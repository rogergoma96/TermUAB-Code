module.exports = (app, passport) => {
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/register',
        failureRedirect: '/login',
        failureFlash: true,
    }));

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/register',
        failureFlash: true,
    }));

    app.get('/logout', (req, res) => {
       req.logout();
       res.redirect('/');
    });

    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next;
        }
        return res.redirect('/');
    }
};
