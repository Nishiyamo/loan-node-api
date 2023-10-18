import { getLoanData, createLoan, updateLoan, deleteLoan } from '../../controllers/loanController'
import express from 'express'

const router = express.Router()

router
  .get('/:dni', getLoanData)
  .post('/:dni', createLoan)
  .patch('/:dni', updateLoan)
  .delete('/:dni', deleteLoan)

module.exports = app => {
  app.use('/api/v1/loan', router)
}
