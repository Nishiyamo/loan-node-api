module.exports = (sequelize, DataType) => {
  const checkNIF = require('../utils/checkNIF.js')
  const Users = sequelize.define('Users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: 'Please enter your name'
        }
      }
    },
    dni: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        notNull: {
          msg: 'Please enter your NIF'
        },
        checkNIF (value) {
          const nif = value.toUpperCase().replace(/[_\W\s]+/g, '')
          if (/^(\d|[XYZ])\d{7}[A-Z]$/.test(nif)) {
            let num = value.match(/\d+/)
            num = (nif[0] != 'Z' ? nif[0] != 'Y' ? 0 : 1 : 2) + num
            if (nif[8] == 'TRWAGMYFPDXBNJZSQVHLCKE'[num % 23]) {
              const typeNIF = /^\d/.test(nif) ? 'DNI' : 'NIE'
              if (typeNIF !== 'DNI' || typeNIF !== 'NIE') {
                throw new Error('NIF must be correctly formed')
              }
            }
          }
        }
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: 'Please enter your Email'
        }
      }
    }
  })

  Users.associate = (models) => {
    Users.hasOne(models.Loans, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return Users
}
