var fs   = require('fs'),
    path = require('path');

fs.readdirSync(__dirname).forEach(function (file) { 
  if (path.extname(file) != '.js' || file == 'index.js')
    return;
  var name = path.basename(file, '.js');
  file = __dirname + '/' + file;
  exports[name] = require(file);
})


