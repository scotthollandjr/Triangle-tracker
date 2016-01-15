describe('triTrack', function() {
  it("a triangle with no equal sides should be a scalene", function() {
    expect(triTrack(15, 20, 10)).to.equal(true);
  });
});

// behaviour || input example || output example
// a + b <= c || a20 b20 c50 || not a triangle
// a = b = c || a20 b20 c20 || equilateral
// a = b != c || a20 b20 c15 || isosceles
// a != b != c || a15 b20 c10 || scalene
