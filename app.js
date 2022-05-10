const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routers/userRouter');
const app = express();

app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req);
//   next();
// });
app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);

module.exports = app;
