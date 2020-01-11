var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/men', function(req, res, next) {
  res.render('men', { title: 'Men Fashion' });
});

router.get('/mens', function(req, res, next) {
  res.render('mens', { title: 'Men Fashion' });
});

router.get('/girl', function(req, res, next) {
  res.render('girl', { title: 'Girl Fashion' });
});

router.get('/girls', function(req, res, next) {
  res.render('girls', { title: 'Girl Fashion' });
});

router.get('/women', function(req, res, next) {
  res.render('women', { title: 'Women Fashion' });
});

router.get('/womens', function(req, res, next) {
  res.render('womens', { title: 'Women Fashion' });
});

router.get('/boy', function(rep,res,next){
  res.render('boy',{title:'Boy Fashion'});
});

router.get('/boys', function(rep,res,next){
  res.render('boys',{title:'Shop'});
});

router.get('/shop', function(rep,res,next){
  res.render('shop',{title:'Shop'});
});

router.get('/blog', function(rep,res,next){
  res.render('blog',{title:'Blog'});
}); 

router.get('/checkout', function(rep,res,next){
  res.render('checkout',{title:'Checkout'});
}); 

router.get('/contact', function(rep,res,next){
  res.render('contact',{title:'Contact'});
}); 

router.get('/payment', function(rep,res,next){
  res.render('payment',{title:'Payment'});
}); 

router.get('/faq', function(rep,res,next){
  res.render('faq',{title:'Faq'});
}); 

router.get('/about', function(rep,res,next){
  res.render('about',{title:'About'});
});

router.get('/single', function(rep,res,next){
  res.render('single',{title:'Single'});
});

module.exports = router;
