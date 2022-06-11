const express = require('express')
const cors = require('cors')

const database = require('./database/connection')
const routes = require('./routes')

class App {
  constructor () {
    this.express = express()
  }

  static async start () {
    const app = new App()
    await database.connect()

    return app.express
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(cors())
  }

  routes () {
    this.express.use('/api/', routes)
  }
}

module.exports = App
