const getUserData = (req, res) => {
  res.send('Get all user data')
}

const createUser = (req, res) => {
  res.send('Create user')
}

const updateUser = (req, res) => {
  res.send('Update user data')
}

const deleteUser = (req, res) => {
  res.send('Delete user data')
}

module.exports = {
  getUserData,
  createUser,
  updateUser,
  deleteUser
}
