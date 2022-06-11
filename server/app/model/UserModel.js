const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const model = new mongoose.Schema({
  user: {
    type: String,
    minLength: 3,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minLength: 6,
    required: true
  }
})

model.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const user = mongoose.model('users', model)

module.exports = user
