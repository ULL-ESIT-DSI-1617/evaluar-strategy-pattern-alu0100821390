"use strict"

class Shape {
	constructor(width, height) {
		this.width_ = width;
		this.height_ = height;
	}
}


class Triangle extends Shape {
	constructor(width, height) {
		super(width, height);
	}
	
	getArea() {
		return (.5 * this.width_ * this.height_);
	}
}


class Square extends Shape {
	constructor(width) {
		super(width);
	}
	
	getArea() {
		return (Math.pow(this.width_, 2));
	}
}


class Rectangle extends Shape {
	constructor(width, height) {
		super(width, height);
	}
	
	getArea() {
		return (this.width_ * this.height_);
	}
}


module.exports = {
	Shape: Shape,
	Triangle: Triangle,
	Square: Square,
	Rectangle: Rectangle
};
	