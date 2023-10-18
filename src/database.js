import Sequelize from 'sequelize'
import usersModel from './models/usersModel'
import loansModel from './models/loansModel'

module.exports = app => {
  let db = null

  const config = app.libs.config

  if (!db) {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )

    db = {
      sequelize,
      Sequelize,
      models: {
        Users: usersModel(sequelize, Sequelize.DataTypes),
        Loans: loansModel(sequelize, Sequelize.DataTypes)
      }
    }

    Object.keys(db.models).forEach(key => {
      db.models[key].associate(db.models)
    })
  }
  return db
}
