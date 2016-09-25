module.exports = function(app) {

  app.get('/',        	require('./loginPage').get);

  app.get('/account', 	require('./accountPage').get);

  app.get('/account/*', require('./accountPage').get);
}