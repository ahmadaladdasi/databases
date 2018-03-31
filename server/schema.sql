CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

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
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  text VARCHAR(280),
  
  PRIMARY KEY(id),
  -- INDEX (user_id),
  -- INDEX (room_id),
  
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

