var express = require('express');
var router = express.Router();
var fs = require('fs');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./public/post.txt', 'utf8', function(err, data) {
      if (err) throw err;
      res.render('index', { post: data, messages: messages });
  });
});

/* GET new message */
router.get('/new', function(req, res, next) {
  res.render('form');
});

// POST new message
router.post('/new', function(req, res, next) {
  const messageUser = req.body.user;
  const messageText = req.body.text;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
