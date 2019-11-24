/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoSessionStore = require('connect-mongo');
const uid = require('uid-safe');

const { userRoutes } = require('./routes/index');
const auth = require('./middlewares/passport-local');

const User = require('./models/User');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const PORT_URL = `https://localhost:5000`;
const { MONGO_URL } = process.env;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await mongoose.connect(MONGO_URL, options);
    console.log('Connected to MONGO database');

    await app.prepare();

    const server = express();
    server.use(express.json());
    server.disable('x-powered-by');
    server.use(express.urlencoded({ extended: true }));

    const MongoStore = mongoSessionStore(session);

    server.use(
      session({
        name: 'group-fitness.sid',
        secret: uid.sync(18),
        store: new MongoStore({
          mongooseConnection: mongoose.connection,
          ttl: 14 * 24 * 60 * 60,
        }),
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          maxAge: 14 * 24 * 60 * 60 * 1000,
          secure: process.env.NODE_ENV === 'production',
        },
      }),
    );

    server.use(auth.initialize);
    server.use(auth.session);

    const apiRouter = express.Router();
    server.use('/api', apiRouter);
    apiRouter.use('/user', userRoutes);

    server.get('*', (req, res) => {
      handle(req, res);
    });

    server.listen(PORT, () => {
      console.log(`Ready on ${PORT_URL}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
