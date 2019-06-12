module.exports = (app, passport) => {
    // POST - LOGIN
    app.post('/login', passport.authenticate('user-login', {
        successRedirect: '/signup',
        failureRedirect: '/login',
        failureFlash: true,
    }));

    // POST - REGISTER
    app.post('/signup', passport.authenticate('user-signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        failureFlash: true,
    }));

    // GET - LOGOUT
    app.get('/logout', (req, res) => {
       req.logout();
       res.redirect('/');
    });


    /**
     * Is Logged in app
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next;
        }
        return res.redirect('/');
    }
};
