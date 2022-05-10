const User = require('../models/userModel');

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// const query = {
//   attributes: ['name', 'age', 'city'],
//   where: {
//     name: 'Masha',
//   },
// };

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.findAll({ where: { userId: req.id } });
    res.status(200).json({
      status: 'success',
      data: { users },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
