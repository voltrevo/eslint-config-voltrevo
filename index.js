'use strict';

var stripComments = require('strip-json-comments');
var fs = require('fs');
var path = require('path');

module.exports = JSON.parse(stripComments(
  fs.readFileSync(path.join(__dirname, '.eslintrc')).toString()
));
