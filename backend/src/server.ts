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

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
