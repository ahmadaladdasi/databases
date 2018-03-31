var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('select u.username, r.roomname, m.text, m.objectId from users u JOIN messages m ON m.user_id = u.id JOIN rooms r ON m.room_id = r.id ORDER BY m.createdAt ASC;', function (err, rows, fields) {
        callback(rows);
      });
    },
    post: function (body, callback) {
      var user_id;
      var room_id;
      // console.log(body);
      db.connection.query(`SELECT users.id FROM users WHERE username = '${body.username}'`, function(err, rows, fields) {
        user_id = rows[0].id;
        db.connection.query(`SELECT rooms.id FROM rooms WHERE roomname = '${body.roomname}'`, function(err, rows, fields) {
          room_id = rows[0].id;
          db.connection.query(`INSERT INTO messages (user_id, room_id, text) VALUES (${user_id}, ${room_id}, "${body.text}")`, function(err, rows, fields) {
            callback();
          });
        });
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (body, callback) {
      db.connection.query(`INSERT INTO users (username) SELECT '${body.username}' WHERE NOT EXISTS( SELECT * FROM users where username = '${body.username}');`, function(err, rows, fields) {
        callback();
      });
    }
  },
  
  rooms: {
    post: function (body, callback) {
      db.connection.query(`INSERT INTO rooms (roomname) SELECT '${body.roomname}' WHERE NOT EXISTS( SELECT * FROM rooms where roomname = '${body.roomname}');`, function(err, rows, fields) {
        callback();
      });
    }
  }
};


    
// INSERT INTO users
//     (username)
// VALUES
//     ('andrew'),
//     ('ahmad'),
//     ('rebecca')


// INSERT INTO rooms
//     (roomname)
// VALUES
//     ('lobby'),
//     ('chill room'),
//     ('hr93');

// INSERT INTO messages (user_id,room_id,text) VALUES (1,1,'hello');    





// select u.username, r.roomname, m.text from users u JOIN 
// messages m ON m.user_id = u.id JOIN
// rooms r ON m.room_id = r.id;

