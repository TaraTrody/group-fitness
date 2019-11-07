/* eslint-disable no-shadow */
/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoSessionStore = require('connect-mongo');
const auth = require('./lib/passport-local');

const User = require('./models/User');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';

const MONGO_URL = process.env.MONGO_URL_TEST;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose
  .connect(MONGO_URL, options)
  .then(
    User.findOne()
      .then((user) => {
        if (!user) {
          const user = new User({
            createdAt: Date(),
            email: 'team@builderbook.org',
            displayName: 'Team Builder Book',
            avatarUrl:
              'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=128',
            slug: 'team - builder - book',
          });
          user.save();
        }
      })
      .catch((err) => console.log(err)),
  )
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

const PORT_URL = `https://localhost:5000`;
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const MongoStore = mongoSessionStore(session);
  // configure and initalize session store
  server.use(
    session({
      name: 'group-fitness.sid',
      secret: process.env.SESSION_SECRET,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 14 * 24 * 60 * 60,
      }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000,
      },
    }),
  );

  server.use(auth.initialize);
  server.use(auth.session);

  server.get('/', (req, res) => {
    req.session.foo = 'bar';
    User.findOne({
      slug: 'team - builder - book',
    }).then((user) => {
      req.user = user;
      app.render(req, res, '/', { user });
    });
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`Ready on ${PORT_URL}`);
  });
});
