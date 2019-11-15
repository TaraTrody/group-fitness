/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    trim: true,

    min: [2, 'Name should be between 2 and 30 characters'],
    max: [30, 'Name should be between 3 and 30 characters'],
    required: [true, 'Last name is required'],
  },

  email: {
    type: String,
    required: [true, 'User email is required'],
    lowercase: true,
    trim: true,
    index: { unique: true },
    validate: {
      validator: (email) => User.doesNotExist({ email }),
      message: 'Email already exists',
    },
  },
  password: {
    type: String,
    index: { unique: true },
    min: [8, 'Password must have at least 8 characters'],
    max: 160,
    required: [true, 'Password is required'],
  },

  userType: {
    type: String,
    enum: ['Instructor', 'Studio/Gym'],
    // required: 'Please select',
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: {
    type: Date,
  },
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.statics.doesNotExist = async function doesNotExist(field) {
  return (await this.where(field).countDocuments()) === 0;
};

userSchema.method.validatePassword = async function validatePassword(plainTextPassword) {
  return bcrypt.compare(plainTextPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
