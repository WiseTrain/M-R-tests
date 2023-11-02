/**
 * This module defines a ShapeFactory for creating various shapes, including circles, triangles, and squares.
 * It demonstrates the Factory Design Pattern, allowing the creation of shape instances 
 * based on type and size.
 *
 * The module includes:
 * - A ShapeFactory for shape creation.
 * - A parent Shape class with common methods and properties.
 * - Concrete shape classes (Circle, Triangle, Square) with unique behavior.
 */

"use strict";
/**
 * ShapeFactory is a factory for creating different types of shapes.
 * @constructor
 */
function ShapeFactory() {}

/**
 * Creates a shape of the specified type with the given size.
 *
 * @param {string} type - The type of shape to create ("circle," "triangle," or "square").
 * @param {number} size - The size or dimensions of the shape.
 * @returns {Shape} A new instance of the specified shape type.
 * @throws {Error} If the provided type is not recognized.
 */
ShapeFactory.prototype.createShape = function (type, size) {
    if (type==="circle") return new Circle(size);
    else if (type==="triangle") return new Triangle(size);
    else if (type==="square") return new Square(size);
    else throw new Error("Unknown type of shape.");
}

// Shape factory may be created using class:
/*class ShapeFactory {
    createShape(type, size) {
        if (type==="circle") return new Circle(size);
        else if (type==="triangle") return new Triangle(size);
        else if (type==="square") return new Square(size);
        else throw new Error("Unknown type of shape.");
    }  
} */


// abstract parent class for all shapes
class Shape {
    constructor(type, size) {
        this._type = type;
        this._size = size;
    }

    // display info about the shape
    display_info() { console.log(`This is a ${this._type} ${this._size}cm in size`) }

    // abstract methods = common interface
    calculateArea() {}
    draw() {}
}

// concrete shape classes:
// class for circle
class Circle extends Shape {

    constructor(size) {
        super('circle', size);
    }

    /**
     * Calculates the area of the circle.
     * @returns {number} The calculated area of the circle.
     */
    calculateArea() { return Math.PI*this._size; }

    /**
     * Imitates drawing the circle.
     */
    draw() { console.log(`Drawing a circle...`) };
}


// class for triangle
class Triangle extends Shape {
    constructor(size) {
        super('triangle', size);
    }

    /**
     * Calculates the area of the triangle.
     * @returns {number} The calculated area of the triangle.
     */
    calculateArea() { return Math.sqrt(3)*(this._size**2)/4; }

    /**
     * Imitates drawing the triangle.
     */
    draw() { console.log(`Drawing a triangle...`) };
}


// class for square
class Square extends Shape {
    constructor(size) {
        super('square', size);
    }

    /**
     * Calculates the area of the square.
     * @returns {number} The calculated area of the square.
     */
    calculateArea() { return this._size**2; }

    /**
     * Imitates drawing the square.
     */
    draw() { console.log(`Drawing a square...`) };
}

// TESTS
const factory = new ShapeFactory;

// circle
console.log("\n");
const c1 = factory.createShape("circle", 10)
c1.display_info();
c1.draw()
console.log("Area =", c1.calculateArea().toFixed(2),"cm\xB2");

//triangle
console.log("\n");
const t1 = factory.createShape("triangle", 20)
t1.display_info();
t1.draw()
console.log("Area =", t1.calculateArea().toFixed(2),"cm\xB2");

// square
console.log("\n");
const s1 = factory.createShape("square", 5)
s1.display_info();
s1.draw()
console.log("Area =", s1.calculateArea().toFixed(2),"cm\xB2");