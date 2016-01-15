function triTrack(a, b, c) {
  if (( a + b <= c ) || ( a + c <= b ) || ( b + c <= a)) {
    alert("Not a triangle!");
  } else if ((a !== b) && (a !== c) && (b !== c)) {
    alert("Scalene!");
  } else if (( a === b ) && (a === c) && ( b === c )) {
    alert("Equilateral!");
  } else if (((a === b) && (b !== c)) || ((b === c) && (a !== b)) || ((a === c) && (a !== b))) {
    alert("Isosceles!");
  } else {
    alert("Probably not a triangle!");
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#side1").val());
    var b = parseInt($("input#side2").val());
    var c = parseInt($("input#side3").val());

    triTrack(a, b, c);

    event.preventDefault();
  });
});
