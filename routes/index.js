var express = require('express');
var router = express.Router();

var MessageController = require('../controllers/Messages');

var MessageSender = new MessageController();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/sendTextMessage', function ( req, res ){
  res.render('message', { title: 'Messages' });
});
router.post('/sendTextMessage', function ( req, res) {
  console.log('the req', req.body);
  MessageSender.sendTextMessage(req, res);
});

module.exports = router;
