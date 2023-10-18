import express from 'express'

module.exports = app => {
  const router = express.Router()
  const userController = require('../../controllers/userController')
  const userControllerHandler = userController(app)

  router
    .get('/', userControllerHandler.getUser)
    .post('/:dni', userControllerHandler.createUser)
    .patch('/:dni', userControllerHandler.updateUser)
    .delete('/:dni', userControllerHandler.deleteUser)

  app.use('/api/v1/user', router)
}
