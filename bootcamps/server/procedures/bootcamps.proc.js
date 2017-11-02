var db = require('../config/db.js');

exports.all = function() {
    return db.rows('GetBootcamps');
}

exports.read = function(id) {
    return db.row('GetBootcamp', [id]);
}

exports.create = function(name, stack, city, cost, userid, categoryid) {
    return db.row('InsertBootcamp', [name, stack, city, cost, userid, categoryid]);
}

// ADMIN ONLY CONNER?
exports.update = function(name, stack, city, cost, userid, categoryid) {
    return db.empty('UpdateBootcamp', [id, name, stack, city, cost, categoryid]);
}

exports.destroy = function(id) {
    return db.empty('DeleteBootcamp', [id]);
}