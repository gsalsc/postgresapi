const User = require('../models/userModel');

exports.signin = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    //const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
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
    //console.log(req.params);
    const user = await User.findAll({ where: { userId: req.params.id } });
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
