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
    const monthlyFee = monthlyFeeCalculator(loan)
    const loanJson = {
      tae: loan.tae,
      requested_capital: loan.requested_capital,
      loan_fee: monthlyFee,
      total_capital_to_return: (monthlyFee * loan.amortization_time_years * 12),
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
