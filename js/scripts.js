function triangle(a, b, c) {
  return (( a + b <= c ) || ( a + c <= b ) || ( b + c <= a))
};

function triType(a, b, c) {
  if ((a !== b) && (a !== c) && (b !== c)) {
    return "Scalene!";
  } else if (( a === b ) && (a === c) && ( b === c )) {
    return "Equilateral!";
  } else if (((a === b) && (b !== c)) || ((b === c) && (a !== b)) || ((a === c) && (a !== b))) {
    return "Isosceles!";
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#side1").val());
    var b = parseInt($("input#side2").val());
    var c = parseInt($("input#side3").val());

    triangle(a, b, c);
    alert(triTrack(a, b, c));

    event.preventDefault();
  });
});
