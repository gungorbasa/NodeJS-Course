const express = require('express');
const app = express();

// This always runs
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

// Request goes top to bottom
// This middleware will work
// If there is a next, 
// it will match with the request and 
// continue with second middleware
app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Product Express!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);