const passport = require('passport');
const router = require('express').Router();
const AuthenticationController = require('../controllers/authentication_controller')
const passportService = require('./passport')

var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});
function protected(req, res, next){
  res.send("Secret");
}
router.route("/protected").get(requireAuth, protected);
router.route("/signup").post(AuthenticationController.signup);
router.route("/signin").post(requireLogin, AuthenticationController.signin);


module.exports = router;