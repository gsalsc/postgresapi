const app = require('./app');
//const User = require('./models/userModel');

// (async () => {
//   try {
//     const users = await User.findAll({});
//     console.log(JSON.stringify(users, null, 2));
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

app.listen(3000, () => console.log('server is running'));
