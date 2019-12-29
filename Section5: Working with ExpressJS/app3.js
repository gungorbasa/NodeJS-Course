const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parsing the body
// For the first thing
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

// Works for any type of requests
app.use('/add-product', (req, res, next) => {
  console.log('Add Product');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// Works only for post
app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);