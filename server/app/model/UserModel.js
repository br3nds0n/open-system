const mongoose = require('mongoose')

const SCHEMA = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const user = mongoose.model('users', SCHEMA)

module.exports = user
