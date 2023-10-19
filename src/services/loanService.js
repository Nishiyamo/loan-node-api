import sequelize from 'sequelize'
import { monthlyFeeCalculator } from '../utils/monthlyFeeCalculator'

module.exports = app => {
  const Loans = app.database.models.Loans

  function getLoanService (nif) {
    return Loans.findAll({
      where: {
        UserId: sequelize.literal(`"UserID" = (SELECT "id" FROM "Users" WHERE "dni" = '${nif}')`)
      }
    })
  }
  function createLoanService (loan) {
    const loanJson = {
      tae: loan.tae,
      total_capital: loan.total_capital,
      loan_fee: monthlyFeeCalculator(loan),
      amortization_time_years: loan.amortization_time_years,
      UserId: sequelize.literal(`(SELECT "id" FROM "Users" WHERE "dni" = '${loan.nif}')`)
    }
    return Loans.create(loanJson)
  }
  function updateLoanService () {
  }
  function deleteLoanService (loan) {
    return Loans.destroy({
      where: {
        id: loan
      }
    })
  }

  return {
    getLoanService,
    createLoanService,
    updateLoanService,
    deleteLoanService
  }
}
