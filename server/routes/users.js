var express = require('express');
var router = express.Router();

router.use('/', function(req,res,next){
  if(!req.user){
    res.redirect('/');
  }
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {user: {
    name: req.user.displayName, 
    image: req.user._json.image.url, 
    email: req.user.emails[0].value
  }});
});

module.exports = router;
