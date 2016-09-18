module.exports = function(app) {
  app.get('/', require('./loginPage').get);
}