const express = require('express')
const router = express.Router()
const userController = require('../../controllers/userController')

router
  .get('/:dni', userController.getUserData)
  .post('/:dni', userController.createUser)
  .patch('/:dni', userController.updateUser)
  .delete('/:dni', userController.deleteUser)

module.exports = router
