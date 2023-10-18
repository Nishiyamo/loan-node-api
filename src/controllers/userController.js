const userService = require('../services/userService')

module.exports = app => {
  const userServiceHandler = userService(app)

  const getUser = (req, res) => {
    const userData = userServiceHandler.getUserService(req.params.dni)
    res.send(userData)
  }

  const createUser = (req, res) => {
    const createdUserData = userServiceHandler.createUserService(req.params)
    res.send(createdUserData)
  }

  const updateUser = (req, res) => {
    const updatedUserData = userServiceHandler.updateUserService(req.params)
    res.send(updatedUserData)
  }

  const deleteUser = (req, res) => {
    userServiceHandler.deleteUserService(req.params)
  }

  return {
    getUser,
    createUser,
    updateUser,
    deleteUser
  }
}
