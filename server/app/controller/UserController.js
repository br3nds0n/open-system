const UserModel = require('../model/UserModel')

class UserController {
  async create (req, res) {
    try {
      const video = req.body
      const result = await UserModel.create(video)

      res.status(201).json(result)
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      })
    }
  }
}

module.exports = UserController
