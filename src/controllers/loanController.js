const loanService = require('../services/loanService')
const { checkNIF } = require('../utils/checkNIF')

module.exports = app => {
  const loanServiceHandler = loanService(app)

  const getLoan = (req, res) => {
    if (checkNIF(req.params.dni)) {
      loanServiceHandler.getLoanService(req.params.dni)
        .then(response => {
          res.json(response)
        }
        )
        .catch(error => {
          res.status(500).json({ msg: error.message })
        })
    } else {
      res.status(400).json({ msg: 'Bad formed NIF or NIE' })
    }
  }

  const createLoan = (req, res) => {
    if (checkNIF(req.body.nif) && req.body.tae && req.body.requested_capital && req.body.amortization_time_years) {
      loanServiceHandler.createLoanService(req.body)
        .then(response =>
          res.json(response)
        )
        .catch(error => {
          res.status(500).json({ msg: error.message })
        })
    } else {
      res.status(400).json({ msg: 'Check all the required fields' })
    }
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
      .then(response => {
        let msg = 'User not deleted'
        if (response === 1) {
          msg = 'User deleted'
        }
        res.json(msg)
      }
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
