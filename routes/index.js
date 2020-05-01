
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express Yayyyyy its working' });
};
