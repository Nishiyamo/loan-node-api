const userService = require('../services/userService')

module.exports = app => {
  const userServiceHandler = userService(app)

  const getUser = (req, res) => {
    userServiceHandler.getUserService(req.params.dni)
      .then(response =>
        res.json(response)
      )
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  }

  const createUser = (req, res) => {
    userServiceHandler.createUserService(req.body)
      .then(response => res.json(response))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  }

  const updateUser = (req, res) => {
    userServiceHandler.updateUserService(req.params)
      .then(response => res.json(response))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  }

  const deleteUser = (req, res) => {
    userServiceHandler.deleteUserService(req.body.dni)
      .then(response => res.json(response))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
  }

  return {
    getUser,
    createUser,
    updateUser,
    deleteUser
  }
}
