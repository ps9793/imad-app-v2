var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send('Article One Served here');
});

app.get('/article-two', function (req, res) {
  res.send('Article Two Served here');
});

app.get('/article-three', function (req, res) {
  res.send('Article Three Served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/kit.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kit.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
