module.exports = app => {
  const Loans = app.database.models.Loans

  function getLoanService (dni) {
    console.log(dni)

    return
  }
  function createLoanService () {
    return
  }
  function updateLoanService () {
    return
  }
  function deleteLoanService () {
    return
  }

  return {
    getLoanService,
    createLoanService,
    updateLoanService,
    deleteLoanService
  }
}
