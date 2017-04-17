"use strict"

var Shape = require('./shapes.js').Shape;
var Triangle = require('./shapes.js').Triangle;
var Square = require('./shapes.js').Square;
var Rectangle = require('./shapes.js').Rectangle;

var shapes = {
	Triangle: 'Triangle',
	Square: 'Square',
	Rectangle: 'Rectangle'
};

module.exports = function(shape, options) {
	var area = 0;

	try {
		let clase = eval(shapes[shape]);
		let new_shape = new clase(options.width, options.height);
		area = new_shape.getArea();
	}
	catch(err) {
		console.log('Desconozco como construir la forma ' + shape);
	}

	return area;
}
