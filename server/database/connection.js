const mongoose = require('mongoose')

class Database {
  static async connect () {
    try {
      const uri = process.env.DATABASE_URI

      await mongoose.connect(uri)
      console.info('📦 connected to database')
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = Database
