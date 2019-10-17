const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const multer = require('multer');

const indexRouter   = require('./routes/index');
const usersRouter   = require('./routes/users');
const mailerRouter  = require('./routes/mailer');
const settings      = require('./routes/settings');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "linchpins.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({express: true}));
app.use(cookieParser());
app.use(session({
    secret: 'AzYm12X?@12',
}));


function getFileName(originalName){
    let output = originalName.substr(0, originalName.lastIndexOf('.')) || originalName;
    output = output.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
    return output;
}

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, __dirname + '/public/uploads/');
    },
    filename: function(req, file, cb){
        cb(null,
            getFileName(file.originalname) +
            '-' +
            Date.now() +
            '.'+
            file.originalname.substr((file.originalname.lastIndexOf('.')+1))
            ); //Making last part of filename random to make it unique
    }
});

const upload = multer({storage: storage});

app.use(upload.single('attachment'));

app.use('/login', indexRouter);
app.use('/users', usersRouter);
app.use('/mailer', mailerRouter);
app.use('/settings', settings);

app.use('*', function(req, res){
    res.render('404');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('404');
});

module.exports = app;
