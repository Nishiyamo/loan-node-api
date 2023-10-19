module.exports = app => {
  const Users = app.database.models.User

  function getUserService (nif) {
    Users.findAll({
      where: {
        dni: nif
      }
    })
  }
  function createUserService (user) {
    Users.create(user)
  }
  function updateUserService () {
    return
  }
  function deleteUserService (nif) {
    Users.destroy({
      where: {
        dni: nif
      }
    })
  }
  return {
    getUserService,
    createUserService,
    updateUserService,
    deleteUserService
  }
}
