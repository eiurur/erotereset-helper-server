const morgan = require('morgan');
const Logger = require('../utils/Logger');

module.exports = function (app) {
  app.locals.pretty = true;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  process.on('unhandledRejection', console.dir);

  app.use(morgan('dev'));
  Logger.activate();
  // logger.info(process.env);

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
      message: err.message,
      error: err,
    });
  });
};
