const fs = require('fs');
const User = require('../models/userModel');
const connectToTable = require('../services/tableConnection');

const data = JSON.parse(fs.readFileSync(`${__dirname}/userdata.json`, 'utf-8'));

const importData = async () => {
  try {
    await connectToTable();
    await User.bulkCreate(data);

    console.log('data loaded');
  } catch (err) {
    console.log(err.message);
  }
};

const deleteData = async () => {
  try {
    await connectToTable();
    await User.drop();
    console.log('data deleted');
  } catch (err) {
    console.log(err.message);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
