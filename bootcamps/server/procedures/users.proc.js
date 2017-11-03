var db = require('../config/db');
//ADMIN AUTH?

exports.all = function () {
    return db.rows('GetAllUsers');
}

exports.read = function (id) {
    return db.row('GetOneUser', [id]);
}

exports.create = function (id, firstname, lastname, email, username, bootcamp, profilepic, /*hash*/) {
    return db.row('CreateUser', [id, firstname, lastname, email, username, bootcamp, profilepic, /*hash*/]);
}

exports.update = function (id, firstname, lastname, email, username, bootcamp, profilepic) {
    return db.row('UpdateUser', [id, firstname, lastname, email, username, bootcamp, profilepic]);
}

exports.destroy = function(id) {
    return db.empty('DeleteUser', [id]);
}

//GetAllUsersByBootcamp to be added
