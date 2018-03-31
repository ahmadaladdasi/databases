var app = require('express')();
var models = require('../models');
var bodyParser = require('body-parser');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        var obj = {};
        obj.results = data;
        res.send(obj);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      app.use(bodyParser.json());
      models.users.post(req.body,function() {
        models.rooms.post(req.body, function(){
          models.messages.post(req.body, function() {
            console.log('sent')
            res.send()
          });
        });
      })    
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('hello users get');
    },
    post: function (req, res) {
      app.use(bodyParser.json());
      // req.body = { username: 'andrew', text: 'sup', roomname: 'hr93' }
      models.users.post(req.body, function() {
        console.log('sent')
        res.send()
      });
    }
  }
};

