const express = require('express'),
app = express();

let myLogger = (req, res, next)  => {
  console.log('Logged to server...')
  next()
};

app.use(myLogger);

app.get('/', (req, res, next) => {
  res.send('Hello World!')
  console.log('Home page hit...')
});

app.listen(3000);