import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import config from './config';
import sequelize from './models/database';

import authRoutes from './routes/auth_router';
import binsRoutes from './routes/bins_router';
import homeRoutes from './routes/home_router';

const { authenticatedMiddleware } = require('../middleware/authenticated_middleware');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('', authRoutes);
app.use('', authenticatedMiddleware, binsRoutes);
app.use('', homeRoutes);

// catch 404 and forward to error handler
app.use(function(req: any, res: any, next: any) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(config.PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Starting application ${config.PORT}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    console.log(`Failed to start application`);
  };
})
