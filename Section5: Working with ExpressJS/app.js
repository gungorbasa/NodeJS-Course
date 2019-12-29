const express = require('express');
const app = express();

// Allows us to add new middleware funciton
// Will be executed for every incoming request (middleware)
app.use((req, res, next) => {
  console.log('In the middleware!');
  // With next, we can use second middleware as well
  // Without it next middleware will not work
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hellow from Express!</h1>');
});

app.listen(3000);