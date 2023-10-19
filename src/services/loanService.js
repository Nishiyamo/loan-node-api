import sequelize from 'sequelize'
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
    return Loans.create(loan)
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
