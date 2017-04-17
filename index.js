"use strict"

var getArea = require('./shapesarea.js');

try {
  var t = getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = getArea('Square',    { width: 100 });
  console.log(s);
  var r = getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  var b = getArea('Bogus');
}
catch (e) {
  console.log(e);
}


