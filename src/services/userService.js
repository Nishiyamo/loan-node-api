module.exports = app => {
  const Users = app.database.models.Users

  function getUserService (nif) {
    return Users.findAll({
      where: {
        dni: nif
      }
    })
  }
  function createUserService (user) {
    return Users.create(user)
  }
  function updateUserService (user) {
    return Users.update({ user }, {
      where: {
        dni: user.nif
      }
    })
  }
  function deleteUserService (nif) {
    return Users.destroy({
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
