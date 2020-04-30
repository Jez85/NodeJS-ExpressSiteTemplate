
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'JEZ auto build test Express' });
};
