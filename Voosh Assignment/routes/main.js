const express = require("express")
const passport = require("passport")
const login = require("../controllers/login")
const register = require("../controllers/register")
const home = require("../controllers/home")
const editDetails = require("../controllers/editDetails")
const signout = require("../controllers/signout")
const getDetails = require("../controllers/getDetails")
const authenticationMiddleware = require("../middlewares/authMiddleware")

//Auth Routes
const googleRedirect = require("../controllers/googleRedirect.js")
//const googleAuth = require('../controllers/googleauth')
require('./auth.js');

const router = express.Router();


router.route('/login').post(login);
router.route("/getUserDetails").get(authenticationMiddleware,getDetails);
router.route("/editDetails").post(authenticationMiddleware,editDetails);
router.route('/register').post(register);
router.route('/signout').get();
router.route('/home').get(authenticationMiddleware,home);
router.route('/signout').post(authenticationMiddleware,signout)
router.route('/login/federated/google').get(passport.authenticate('google'));
// router.get('/oauth2/redirect/google', passport.authenticate('google', {
//     successReturnToOrRedirect: '/',
//     failureRedirect: '/login'
//   }));
router.route("/account/auth/callback").get(passport.authenticate('google', { failureRedirect: '/login' }),googleRedirect);
module.exports = router;