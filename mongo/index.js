var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Repay');

var userSchema = mongoose.Schema({
  id : { type : String },
  password : { type : String },
  name : { type : String },
  apikey : { type : String },
  isLogin : { type : Boolean },
  token : { type : String }
});

var User = mongoose.model("User", userSchema);
exports.mongoose = mongoose;
exports.db = db;
exports.userSchema = userSchema;
exports.User = User;
