'use strict';

var stripComments = require('strip-json-comments');
var fs = require('fs');

module.exports = JSON.parse(stripComments(
  fs.readFileSync('./.eslintrc').toString()
));
