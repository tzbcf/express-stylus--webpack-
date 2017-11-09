var express = require('express');
var router = express.Router();
// var css=require("stylus");
//     str=require("fs").readFileSync("public/stylesheets/in.styl","utf-8")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/stylesheets/css', function(req, res, next) {
//     css.render(str,{filename:"in.css"},function(err,css){
//         if(err) throw err;
//         res.end(css);
//     })
// });
module.exports = router;
