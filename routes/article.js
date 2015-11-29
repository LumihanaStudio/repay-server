// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var session = require('express-session');
// var mongo = require('../mongo');
// var randomstring = require('randomstring');
// var router = express.Router();
// module.exports = router;
//
//
// router.post('/listArticle', function(req, res){
//   var status = req.body.status;
//   var apikey = req.body.apikey;
//   console.log(status);
//   mongo.Article.find({ apikey : apikey , status : status }, function(err, docs){
//     if(docs.length==0) res.sendStatus(400);
//     else res.send(docs);
//   });
// });
