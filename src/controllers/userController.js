const userService = require('../services/userService')
const { checkNIF } = require('../utils/checkNIF')

module.exports = app => {
  const userServiceHandler = userService(app)

  const getUser = (req, res) => {
    if (checkNIF(req.query.nif)) {
      userServiceHandler.getUserService(req.query.nif)
        .then(response =>
          res.json(response)
        )
        .catch(error => {
          res.status(500).json({ msg: error.message })
        })
    } else {
      res.status(400).json({ msg: 'Bad formed NIF' })
    }
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
    if (checkNIF(req.body.nif)) {
      userServiceHandler.deleteUserService(req.body.nif)
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
    } else {
      res.status(400).json({ msg: 'Bad formed NIF' })
    }
  }

  return {
    getUser,
    createUser,
    updateUser,
    deleteUser
  }
}
