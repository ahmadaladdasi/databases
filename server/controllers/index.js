var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(message)
      res.send(req.method);
      // recieve a get request
      // forward request to models/index.js somehow
      // returns data from model/index.js
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.send('hello messages post');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('hello users get');
    },
    post: function (req, res) {
      res.send('hello users post');
    }
  }
};

