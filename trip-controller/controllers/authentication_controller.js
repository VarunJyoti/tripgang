const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');
function tokenForUser(user){
  var timestamp = new Date().getTime();
  return jwt.encode({
     sub: user.id,
     iat: timestamp
  }, config.secret);
}
exports.signup = function(req, res, next){
  var email = req.body.email;
  var password = req.body.password;
  var phone = req.body.phone;
  if(!email || !password || !phone){
    return res.status(400).json({error: "You must provide email and password"});
  }
  User.findOne({email: email}, function(err, existingUser){
    if(err){
      return next(err);
    }
    if(existingUser){
        return res.status(400).json({error: "Already Exists"});
    }

    var user = new User({
      email: email,
      password: password,
      phone: phone
    });
    user.save(function(err){
       if(err){ return next(err); }
       res.setHeader('Content-Type', 'application/json');
       res.send({user_id: user._id, token: tokenForUser(user)});
    });
  });

}

exports.signin = function(req, res, next){
   var user = req.user;
   res.send({token: tokenForUser(user), user_id: user._id})

}
