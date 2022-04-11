/**
 * Request handlers
 */

// Dependencies
// var _data = require('./data');



// Define handlers

var _data = require('./data');
var helpers = require('./helpers');

// Define handlers 
var handlers = {};

//Ping handler
handlers.ping = function (data, callback) {
    callback(200);
}

handlers.posts = function (data,callback){
    var acceptableMethods = ['post', 'get' , 'put' , 'delete'];
    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._users[data.method](data, callback);
    } else {
        callback(405);
    }
};

handlers._posts = {};