var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // var messageQuery = parse the message into a sql query.
      db.connection.query('select u.username, r.roomname, m.text from users u JOIN messages m ON m.user_id = u.id JOIN rooms r ON m.room_id = r.id;', function (err, rows, fields) {
        if (err) throw err
        callback(rows);
      })

      // executes a sql query somehow
      // returns results of query to the controller somehow
    }, // a function which produces all the messages
    post: function (body) {
      // query the database to find foreign key value for room_id and user_id
        // update the messages table
        // account for new users
        // account for new rooms
        
      // db.connection.query('select u.username, r.roomname, m.text from users u JOIN messages m ON m.user_id = u.id JOIN rooms r ON m.room_id = r.id;', function (err, rows, fields) {
      //   if (err) throw err
      //   callback(ret);
      // })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


    
// INSERT INTO users
//     (username)
// VALUES
//     (body.username),
// 

// INSERT INTO rooms
//     (roomname)
// VALUES
//     (body.roomname),

// INSERT INTO messages
//     (user_id,room_id,text)
// VALUES
//     (1,1,"hi"),
//     (2,2,"sup!"),
//     (3,3,"hola!");



// select u.username, r.name, m.body from users u JOIN 
// messages m ON m.user_id = u.id JOIN
// rooms r ON m.room_id = r.id;

