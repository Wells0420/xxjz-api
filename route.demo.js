module.exports.route = function(server, db) {
 var Users = require('./models/users.js');
 /**
  * Users
  */
 server.get('/users', function (req, res, next) {
  res.send(Users.list(db, req, res));
  return next();
 });
 server.get('/users/:user_id', function (req, res, next) {
  res.send(Users.get(db, req, res));
  return next();
 });
} 
：
// fake database
var users = [
 {
  name: 'Nick P',
  email: 'nick@domain.com'
 },
 {
  name: 'Zack S',
  email: 'zack@domain.com'
 }
];
exports.list = function(db, req, res) {
return users;
};
exports.get = function(db, req, res) {
 return users[req.params.user_id];
};