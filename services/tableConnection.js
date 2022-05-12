const User = require('../models/userModel');

const connectToTable = async () => {
  try {
    await User.sync({ alter: true });
    console.log('connected to the table');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectToTable;
