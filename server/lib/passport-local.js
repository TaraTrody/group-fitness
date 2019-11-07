const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
    try {
      const user = await User.findOne({ email: username }).exec();
      if (!user) {
        return done(null, false, { message: 'Invalid username or password' });
      }
      const isValidPassword = await user.validatePassword(password);
      if (!isValidPassword) {
        return done(null, false, { message: 'Invalid username or password' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).exec();
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

module.exports = {
  initialize: passport.initialize(),
  session: passport.session(),
};
