var expect = require("chai").expect;
var testFunction = require("../src/index.js");

describe("Hex to RGB conversion", function() {
  it("converts the basic colors", function() {
    var test1 = testFunction.hexConverter("#FFF", 0.3);
    var test2 = testFunction.hexConverter("#FFFFFF", 1);
    var test3 = testFunction.hexConverter("FFF", 0.5);
    var test4 = testFunction.hexConverter("FFFFFF", 1);

    expect(test1).to.deep.equal([255, 255, 255, .3]);
    expect(test2).to.deep.equal([255, 255, 255, 1]);
    expect(test3).to.deep.equal([255, 255, 255, .5]);
    expect(test4).to.deep.equal([255, 255, 255, 1]);
  });

  it("throws error",function() {
    var test5 = testFunction.hexConverter("FFFFF", 0.3);

    expect(test5).to.be.false;
  });
});
