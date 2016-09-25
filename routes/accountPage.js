const path 			= require('path');
const assetsPaths 	= require('../views/accountPage/assets.json');

module.exports.get = function(req, res) {
  res.render('accountPage/accountPage', assetsPaths);
}