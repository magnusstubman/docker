var app = require('express')();

app.get('/', function (req, res) {
  res.json('Hello world');
});

app.listen(7000);
console.log('App running..');

