module.exports = (app) => {
  // serve index and view partials
  app.get('/', (req, res) => {
    res.render('index');
  });

  // redirect all others to the index (HTML5 history)
  app.get('*', (req, res) => {
    res.render('index');
  });
};
