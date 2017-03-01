const passport = require("passport");
const User = require('../models/user');
const config = require('../config');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');

var jwtOptions = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromHeader("authorization")
};

var localOptions = {
    usernameField: 'email'
};
var localStrategy = new LocalStrategy(localOptions, function(email, password, done){

  User.findOne({email: email}, function(err, user){
     if(err) { return done(err) };
     if(!user){ return done(null, false) };
     user.comparePassword(password, function(err, isMatch){
         if(err) { return done(err) };
         if(isMatch){
            done(null, user);
         }else{
            done(null, false);
         }
     });
  })
})
var jwtStartegy = new JwtStrategy(jwtOptions, function(payload, done){
   User.findById(payload.sub, function(err, user){
       if(err){ return done(err, false); }
       if(user){
            done(null, user);
       }else{
            done(null, false);
       }

   })
});

passport.use(jwtStartegy);
passport.use(localStrategy);