describe('triangle', function() {
  it("if the sum of any 2 sides is less than or equal to the remaining side, not a triangle", function() {
    expect(triangle(20, 20, 50)).to.equal(true)
  });
  it("if the sum of any 2 sides are not less or equal to the remaining side, is a triangle", function() {
    expect(triangle(10, 20, 25)).to.equal(false)
  });
});

describe('triType', function() {
  it("a triangle with no equal sides should be a scalene", function() {
    expect(triType(15, 20, 10)).to.equal("Scalene!");
  });

  it("a triangle with all equal sides should be an equilateral", function() {
    expect(triType(20, 20, 20)).to.equal("Equilateral!");
  });

  it("a triangle with exactly two equal sides should be an isoceles", function() {
    expect(triType(20, 20, 15)).to.equal("Isosceles!");
  });
});

// behaviour || input example || output example
// a + b <= c || a20 b20 c50 || not a triangle
// a = b = c || a20 b20 c20 || equilateral
// a = b != c || a20 b20 c15 || isosceles
// a != b != c || a15 b20 c10 || scalene
