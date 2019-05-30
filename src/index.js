const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const path = require('path');

const app = express();

const user = require('./routes/user-routes');

// SETTINGS
app.set('port', process.env.PORT || 8080);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// SESSIONS
app.use(session({
    secret: 'ESTO ES SECRETO',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, // required
    saveUninitialized: false, // required
}));

// ROUTES
app.use('/user-routes', user);
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
