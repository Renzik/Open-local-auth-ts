import passport from 'passport';
import { Router } from 'express';

const router = Router();
const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = router;

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: '/auth/twitter/callback',
    },
    function (token: any, tokenSecret: any, profile: any, cb: any) {
      // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      cb(null, profile);
    }
  )
);

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  }
);
