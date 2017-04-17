var getArea = require("../shapesarea.js");

describe("getArea", function() {
  it("must compute the triangle area correctly", function() {
    var result = getArea('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.match(/^5000$/);
  })
  it("must compute the square area correctly", function() {
    var result = getArea('Square',  { width: 100 });
    /* There is a white space between consecutive columns */
    result.should.match(/^10000$/);
  })
  it("must compute the rectangle area correctly", function() {
    var result = getArea('Rectangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.match(/^10y000$/);
  })
});
