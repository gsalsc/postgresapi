const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('appdb', 'app', 'password123', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  city: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 30,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
