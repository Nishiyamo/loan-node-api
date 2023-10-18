const loanService = require('../services/loanService')

module.exports = app => {
  const loanServiceHandler = loanService(app)

  const getLoan = (req, res) => {
    const loanData = loanServiceHandler.getLoanService(req.params.dni)
    res.send(loanData)
  }

  const createLoan = (req, res) => {
    res.send('Create Loan')
  }

  const updateLoan = (req, res) => {
    res.send('Update Loan data')
  }

  const deleteLoan = (req, res) => {
    res.send('Delete Loan data')
  }

  return {
    getLoan,
    createLoan,
    updateLoan,
    deleteLoan
  }
}
