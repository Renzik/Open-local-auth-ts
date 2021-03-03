import { Router } from 'express';
import passport from 'passport';

const router = Router();
const GithubStrategy = require('passport-github').Strategy;

module.exports = router;

var GitHubStrategy = require('passport-github').Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      cb(null, profile);
    }
  )
);

router.get('/auth/github', passport.authenticate('github'));

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  }
);
