const userService = require('../services/userService')

module.exports = app => {
  const userServiceHandler = userService(app)

  const getUser = (req, res) => {
    userServiceHandler.getUserService(req.params.dni)
      .then(response =>
        res.json(response)
      )
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  const createUser = (req, res) => {
    userServiceHandler.createUserService(req.body)
      .then(response => res.json(response))
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  const updateUser = (req, res) => {
    userServiceHandler.updateUserService(req.body)
      .then(response => res.json(response))
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  const deleteUser = (req, res) => {
    userServiceHandler.deleteUserService(req.body.dni)
      .then(response => {
        let msg = 'User not deleted'
        if (response === 1) {
          msg = 'User deleted'
        }
        res.json(msg)
      })
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  return {
    getUser,
    createUser,
    updateUser,
    deleteUser
  }
}
