var db = require('../db');

module.exports = {
  messages: {
    get: function (message) {
      var messageQuery = //parse the message into a sql query.
      db.connection.query('SELECT * FROM messages', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0].solution)
      })
      // executes a sql query somehow
      // returns results of query to the controller somehow
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// INSERT INTO messages
//     (user_id,room_id,body)
// VALUES
//     (1,1,"hi"),
//     (2,2,"sup!"),
//     (3,3,"hola!");
    
// INSERT INTO users
//     (username)
// VALUES
//     ("ahmad"),
//     ("andrew"),
//     ("rebecca");

// INSERT INTO rooms
//     (name)
// VALUES
//     ("lobby"),
//     ("chill Room"),
//     ("HRSF93");

