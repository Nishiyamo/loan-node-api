import express from 'express'

module.exports = app => {
  const router = express.Router()
  const loanController = require('../../controllers/loanController')
  const loanControllerHandler = loanController(app)

  router
    .get('/', loanControllerHandler.getLoan)
    .post('/:dni', loanControllerHandler.createLoan)
    .patch('/:dni', loanControllerHandler.updateLoan)
    .delete('/:dni', loanControllerHandler.deleteLoan)

  app.use('/api/v1/loan', router)
}
