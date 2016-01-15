describe('triTrack', function() {
  it("if the sum of any 2 sides is less than or equal to the remaining side, not a triangle", function() {
    expect(triTrack(20, 20, 50)).to.equal(true);
  });

  it("a triangle with no equal sides should be a scalene", function() {
    expect(triTrack(15, 20, 10)).to.equal(true);
  });

  it("a triangle with all equal sides should be an equilateral", function() {
    expect(triTrack(20, 20, 20)).to.equal(true);
  });

  it("a triangle with exactly two equal sides should be an isoceles", function() {
    expect(triTrack(20, 20, 15)).to.equal(true);
  });
});

// behaviour || input example || output example
// a + b <= c || a20 b20 c50 || not a triangle
// a = b = c || a20 b20 c20 || equilateral
// a = b != c || a20 b20 c15 || isosceles
// a != b != c || a15 b20 c10 || scalene
