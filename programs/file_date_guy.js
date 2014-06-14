#!/usr/bin/env node
/**
This script creates a document in the format YYYYMMDD.md

I use these type of file names in my daily freewriting. 
*/
var fs = require('fs');
var filepath = "";
var curDate = new Date();

/**
Give me logging some personality.
**/
function log(message) {
    console.log("[file date guy] " + message);
}

/**
prepend a zero to any number less than 10. Returns a string.
**/
function prependZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

console.log(" "); // giving some space before my output.

filepath += curDate.getFullYear();
filepath += prependZero(curDate.getMonth()+1); //why do js months start at 0?
filepath += prependZero(curDate.getDate());
filepath += ".md";
try {
    fs.openSync(filepath, 'wx');
    log(filepath + " created");
}
catch(ex) {
    if (ex.code === 'EEXIST') {
        log("the file i'm trying to create already exists.");
    }
    else {
        log("an unknown error occurred.");
        log(JSON.stringify(ex));
    }
}
