require('dotenv').config();
require('./db/connection')

const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const steamStrategy = require('./strategies/steamStrategy');
const passport = require('passport');
const session = require('express-session');

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60000 * 60 * 24
  },
  resave: false,
  saveUninitialized: false,
  name: 'steam.oauth2'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
