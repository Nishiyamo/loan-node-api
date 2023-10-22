const loanService = require('../services/loanService')
const { checkNIF } = require('../utils/checkNIF')

module.exports = app => {
  const loanServiceHandler = loanService(app)

  const getLoan = (req, res) => {
    if (checkNIF(req.query.nif)) {
      loanServiceHandler.getLoanService(req.query.nif)
        .then(response => {
          res.json(response)
        }
        )
        .catch(error => {
          res.status(500).json({ msg: error.message })
        })
    } else {
      res.status(400).json({ msg: 'Bad formed NIF' })
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
      let msg = ''
      if (!checkNIF(req.body.nif)) {
        msg = 'Bad formed NIF'
      }
      if (!req.body.id) {
        msg += ' Missing id on params'
      }
      if (!req.body.tae) {
        msg += ' Missing tae on params'
      }
      if (!req.body.requested_capital) {
        msg += ' Missing requested_capital on params'
      }
      if (!req.body.amortization_time_years) {
        msg += ' Missing amortization_time_years on params'
      }
      res.status(400).json({ msg })
    }
  }

  const updateLoan = (req, res) => {
    if (checkNIF(req.body.nif) && req.body.id && req.body.tae && req.body.requested_capital && req.body.amortization_time_years) {
      loanServiceHandler.updateLoanService(req.body)
        .then(response => {
          let msg = 'Loan not updated'
          if (response === 1) {
            msg = 'Loan updated'
          }
          res.json(msg)
        }
        )
        .catch(error => {
          res.status(500).json({ msg: error.message })
        })
    } else {
      let msg = ''
      if (!checkNIF(req.body.nif)) {
        msg = 'Bad formed NIF'
      }
      if (!req.body.id) {
        msg += ' Missing id on params'
      }
      if (!req.body.tae) {
        msg += ' Missing tae on params'
      }
      if (!req.body.requested_capital) {
        msg += ' Missing requested_capital on params'
      }
      if (!req.body.amortization_time_years) {
        msg += ' Missing amortization_time_years on params'
      }
      res.status(400).json({ msg })
    }
  }

  const deleteLoan = (req, res) => {
    if (checkNIF(req.body.nif) && req.body.id) {
      loanServiceHandler.deleteLoanService(req.body)
        .then(response => {
          let msg = 'Loan not deleted'
          if (response === 1) {
            msg = 'Loan deleted'
          }
          res.json(msg)
        }
        )
        .catch(error => {
          res.status(500).json({ msg: error.message })
        })
    } else {
      let msg = ''
      if (!checkNIF(req.body.nif)) {
        msg += 'Bad formed NIF'
      }
      if (!req.body.id) {
        msg += 'Missing ID info'
      }
      res.status(400).json({ msg })
    }
  }

  return {
    getLoan,
    createLoan,
    updateLoan,
    deleteLoan
  }
}
