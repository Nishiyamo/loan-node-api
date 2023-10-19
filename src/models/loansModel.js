module.exports = (sequelize, DataType) => {
  const Loans = sequelize.define('Loans', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tae: {
      type: DataType.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    total_capital: {
      type: DataType.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    loan_fee: {
      type: DataType.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    amortization_time: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  })

  Loans.associate = (models) => {
    Loans.belongsTo(models.Users)
  }

  return Loans
}
