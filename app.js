const createError = require('http-errors');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');

const config = require('./config');
const sequelize = require('./models/database');
const authRoutes = require('./routes/auth_router');
const binsRoutes = require('./routes/bins_router');
const homeRoutes = require('./routes/home_router');

const authenticatedMiddleware = require('./middleware/authenticated_middleware');

const app = express();

// view engine setup
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('layout', './layouts/page_layout');
app.set('view engine', 'ejs');

const sess = {
  secret: config.SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}
app.use(session(sess));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('', authRoutes);
app.use('', authenticatedMiddleware, binsRoutes);
app.use('', homeRoutes);

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

app.listen(config.PORT, async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log(`Starting application ${config.PORT}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    console.log(`Failed to start application`);
  };
})
