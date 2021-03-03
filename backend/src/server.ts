import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';

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

app.use(require('./googleStrategy'));
app.use(require('./twitterStrategy'));
app.use(require('./githubStrategy'));

passport.serializeUser((user: any, done: any) => {
  // the return value is added to the session
  return done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  // the return value is added to req.user
  return done(null, user);
});

app.use('/api/users', require('./api/users'));

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
