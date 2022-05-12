const app = require('./app');
//const User = require('./models/userModel');
const connectToTable = require('./services/tableConnection');

(async () => {
  try {
    await connectToTable();
  } catch (err) {
    console.log(err.message);
  }
})();

// (async () => {
//   try {
//     await User.sync({ alter: true });
//     console.log('connected to the table');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

// (async () => {
//   try {
//     await User.create({
//       name: 'Ivan',
//       age: 35,
//       email: 'ivam@mail.com',
//       city: 'Moscow',
//       password: '123456',
//     });
//     // res.status(200).json({
//     //   status: 'success',
//     //   data: { user },
//     // });
//   } catch (err) {
//     // res.status(400).json({
//     //   status: 'fail',
//     //   message: err,
//     console.log(err.message);
//   }
// })();

app.listen(3000, () => console.log('server is running'));
