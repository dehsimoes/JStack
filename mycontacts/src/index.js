const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500);
});

app.listen(3000, () => {
  console.log('My Contacts app running at http://localhost:3000');
});
