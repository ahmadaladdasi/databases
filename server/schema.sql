
CREATE DATABASE chat;

USE chat;

 

/* Create other tables and define schemas for them here! */


-- TODO:
-- ADD CREATEDAT TO MESSAGES

CREATE TABLE users (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  
  PRIMARY KEY(id)
  -- INDEX (user_id),
  -- INDEX (room_id),
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(25),
  
  PRIMARY KEY(id)
  -- INDEX (user_id),
  -- INDEX (room_id),
);

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  text VARCHAR(280),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY(objectId),
  -- INDEX (user_id),
  -- INDEX (room_id),
  
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

INSERT INTO users     (username) VALUES     ('andrew'),     ('ahmad'),     ('rebecca');
INSERT INTO rooms     (roomname) VALUES     ('lobby'),     ('chill room'),     ('hr93');
INSERT INTO messages     (user_id,room_id,text) VALUES     (1,1,"hi"),     (2,2,"sup!"),     (3,3,"hola!");

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

