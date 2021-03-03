import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const PORT = 4000;

mongoose.connect(
  `${process.env.MONGODB_START}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.MONGODB_END}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to db successfully');
  }
);

// body parser
app.use(express.json());

// cors middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// creates session
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
  // the return value is added to the session
  return done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  // the return value is added to req.user
  return done(null, user);
});

app.use('/api/users', require('./api/users'));

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

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  }
);

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
