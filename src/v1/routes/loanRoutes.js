const express = require('express')
const router = express.Router()
const loanController = require('../../controllers/loanController')

router
  .get('/:dni', loanController.getLoanData)
  .post('/:dni', loanController.createLoan)
  .patch('/:dni', loanController.updateLoan)
  .delete('/:dni', loanController.deleteLoan)

module.exports = router
