import { getUserData, createUser, updateUser, deleteUser } from '../../controllers/userController'
import express from 'express'

const router = express.Router()

router
  .get('/:dni', getUserData)
  .post('/:dni', createUser)
  .patch('/:dni', updateUser)
  .delete('/:dni', deleteUser)

module.exports = app => {
  app.use('/api/v1/user', router)
}
