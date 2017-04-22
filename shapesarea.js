"use strict"

var Shape = require('./shapes.js').Shape;
var Triangle = require('./shapes.js').Triangle;
var Square = require('./shapes.js').Square;
var Rectangle = require('./shapes.js').Rectangle;


(function(shapes) {
	shapes.Triangle = Triangle;
	shapes.Square = Square;
	shapes.Rectangle = Rectangle;
}(global.shapes = global.shapes || {}));


module.exports = function(shape, options) {
	var area = 0;

	try {
		let new_shape = new shapes[shape](options.width, options.height);
		area = new_shape.getArea();
	}
	catch(err) {
		console.log('Desconozco como construir la forma ' + shape);
	}

	return area;
}
