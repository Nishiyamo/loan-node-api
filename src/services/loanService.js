import sequelize from 'sequelize'
module.exports = app => {
  const Loans = app.database.models.Loans
  const Users = app.database.models.Users

  function getLoanService (nif) {
    return Loans.findAll({
      where: {
        UserId: sequelize.literal(`"UserID" = (SELECT "id" FROM "Users" WHERE "dni" = '${nif}')`)
      }
    })
  }
  function createLoanService (loan) {
    const monthlyInterest = (loan.tae / 100) / 12
    const monthsAmortizationPeriod = -(loan.amortization_time_years * 12)
    const divAuxPart = 1 + monthlyInterest
    const divPow = Math.pow(divAuxPart, monthsAmortizationPeriod)
    const divFinalPart = 1 - divPow
    const loanFee = (loan.total_capital * monthlyInterest) / divFinalPart
    console.log('loanFee', loanFee)
    const loanJson = {
      tae: loan.tae,
      total_capital: loan.total_capital,
      loan_fee: loanFee,
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
