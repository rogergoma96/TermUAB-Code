const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { mongoose } = require('./config/dataBase');

const app = express();

require('./config/passport')(passport);

// SETTINGS
app.set('port', process.env.PORT || 8080);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(session({
    secret: 'ESTO ES SECRETO',
    resave: false,
    saveUninitialized: false,
}));

// ROUTES
require('./routes/user-routes')(app, passport);
//app.use('/api/tasks', require('./routes/task.routes'));

// STATIC FILES
app.use(express.static(path.join(__dirname + '/public')));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, (__dirname + '/public/index.html')));
});

// Server running in port 3000
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
