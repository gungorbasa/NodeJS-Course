const express = require('express');
const app = express();

// app.use('/', (req, res, next) => {
//   console.log('Middleware-1');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('Middleware-2');
//   res.send('<h1>Assignment-2 with Express</h1>');
// });

app.use('/users', (req, res, next) => {
  console.log('Users endpoint');
  res.send('<h1>Users endpoint</h1>');
});

app.use('/', (req, res, next) => {
  console.log('General endpoint');
  res.send('<h1>General endpoint</h1>');
});

app.listen(3000);