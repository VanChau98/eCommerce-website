var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./control/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname,'public/javascripts')));
app.use(express.static(path.join(__dirname,'public/stylesheets')));
app.use('/fonts',express.static(path.join(__dirname,'fonts')));

app.use('/', indexRouter);
app.use('/men',indexRouter);
app.use('/mens', indexRouter);
app.use('/girl', indexRouter);
app.use('/girls',indexRouter);
app.use('/women',indexRouter);
app.use('/boy',indexRouter);
app.use('/womens', indexRouter);
app.use('/boys', indexRouter);
app.use('/shop', indexRouter);
app.use('/blog', indexRouter);
app.use('/checkout', indexRouter);
app.use('/contact', indexRouter);
app.use('/payment', indexRouter);
app.use('/faq', indexRouter);
app.use('/about', indexRouter);
app.use('/single', indexRouter);
//app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
