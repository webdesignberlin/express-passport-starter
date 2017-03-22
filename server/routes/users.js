var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {user: {
    name: req.user.displayName, 
    image: req.user._json.image.url, 
    email: req.user.emails[0].value
  }});
});

module.exports = router;
