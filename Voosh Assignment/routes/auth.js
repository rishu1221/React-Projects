var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var session = require('express-session');
const {user} = require('../db/connect')
const jwt = require('jsonwebtoken')

passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: 'http://localhost:3000/api/v1/account/auth/callback',
  scope: [ 'profile','email' ]
}, async function (accessToken,refreshToken, profile, cb) {
    try {
        console.log(profile.emails)

    const User = await user.findOne({ userName: profile.emails[0].value});

    if(!User){
        const createdUser = {
            userName : profile.emails[0].value,
            id : Date.now(),
            admin : false
        }
        await user.create(createdUser);
    }   
        const token = jwt.sign({ id : Date.now(), userName : profile.emails[0] , admin : false}, process.env.JWT_SECRET, {
            expiresIn: '1h' // Token expires in 1 hour
        });
        User.token = token;
    return cb(null,User);
    } catch (error) {
        return cb(error,null);
    }
}));
 



passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

// router.post('/logout', function(req, res, next) {
//   req.logout(function(err) {
//     if (err) { return next(err); }
//     res.redirect('/');
//   });
// });
