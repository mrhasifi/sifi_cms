/**
 * Library for storing and editing data
 */

// Dependecies
const { dir } = require('console');
var fs = require('fs');
var path = require('path');
const helpers = require('./helpers');

// Container for the module (to be exported)
var lib = {};

// Base directory of the data folder
lib.baseDir = path.join(__dirname,'/../.data/');

// Write data to a file
lib.create = function(dir, file, data, callback){
    // Open the file for writing
    fs.open(lib.baseDir+dir+'/'+file+'.json','wx',function(err,fileDescriptor){
        if(!err&& fileDescriptor){
            // Convert data to string
            var stringData = JSON.stringify(data);

            //Write to file and close it
            fs.writeFile(fileDescriptor,stringData,function(err){
                if(!err){
                    fs.close(fileDescriptor,function(err){
                        if(!err){
                            callback(false);
                        } else {
                            callback('Masalah ketika tutup file baru');
                        }
                    });

                } else {
                    callback('Masalah semasa catat ke file baru');
                }
            });
        } else {
            callback('Could not create new file, it may already exist');
        }
    });
};


// Read data from a file

lib.read = function(dir,file,callback){
    fs.readFile(lib.baseDir+dir+'/'+file+'.json','utf8',function(err,data){
        if(!err && data){
            var parsedData = helpers.parseJsonToObject(data);
            callback(false,parsedData);
        } else {
            callback(err,data);
        }
    });
};

// Update data inside a file
lib.update = function(dir,file,data,callback){

    //Open the file for writing
    fs.open(lib.baseDir+dir+'/'+file+'.json','r+',function(err,fileDescriptor){

        if(!err && fileDescriptor){
            // Convert data to string
            var stringData = JSON.stringify(data);

            // Truncate the file
            fs.ftruncate(fileDescriptor, function(err){

                if(!err){
                    // Write to the file and close it
                    fs.writeFile(fileDescriptor,stringData,function(){
                        if(!err){
                            fs.close(fileDescriptor,function(err){
                                if(!err){
                                    callback(false);
                                } else {
                                    callback('Masalah tutup');
                                }
                            });
                        } else {
                            callback('Masalah catat ke file');
                        }
                    });
                } else {
                    callback('Masalah truncate');
                }
            });
        } else {
            callback('Tak boleh buka file utk update, mungkin tak wujud');
        }
    });
};

// Delete a file
lib.delete = function(dir,file,callback){
    // Unlink the file
    fs.unlink(lib.baseDir+dir+'/'+file+'.json', function(err){
        if(!err){
            callback(false);
        } else {
            callback('Error deleting');
        }
    });
};

// Export the module
module.exports = lib;
