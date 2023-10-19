const loanService = require('../services/loanService')

module.exports = app => {
  const loanServiceHandler = loanService(app)

  const getLoan = (req, res) => {
    loanServiceHandler.getLoanService(req.params.dni)
      .then(response => {
        console.log(response)
        res.json(response)
      }
      )
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  const createLoan = (req, res) => {
    loanServiceHandler.createLoanService(req.body)
      .then(response =>
        res.json(response)
      )
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  const updateLoan = (req, res) => {
    loanServiceHandler.updateLoanService(req.body)
      .then(response =>
        res.json(response)
      )
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  const deleteLoan = (req, res) => {
    loanServiceHandler.deleteLoanService(req.body)
      .then(response =>
        res.json(response)
      )
      .catch(error => {
        res.status(500).json({ msg: error.message })
      })
  }

  return {
    getLoan,
    createLoan,
    updateLoan,
    deleteLoan
  }
}
