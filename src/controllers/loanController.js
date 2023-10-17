const getLoanData = (req, res) => {
  res.send('Get all Loan data')
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

module.exports = {
  getLoanData,
  createLoan,
  updateLoan,
  deleteLoan
}
