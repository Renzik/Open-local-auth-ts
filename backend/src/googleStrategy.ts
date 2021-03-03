import passport from 'passport';
import { Router } from 'express';

const router = Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = router;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    // this function gets called on a succesful authentication!
    // the function below is called the verify cb.
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      // insert into db.
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      cb(null, profile);
    }
  )
);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  }
);
