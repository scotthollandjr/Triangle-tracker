var triTrack = function(a, b, c) {
  if (( a + b <= c ) || ( a + c <= b ) || ( b + c <= a)) {
    return true;
    alert("Not a triangle!");
  } else if ((a !== b) && (a !== c) && (b !== c)) {
    return true;
    alert("Scalene!");
  } else if (( a === b ) && (a === c) && ( b === c )) {
    return true;
    alert("Equilateral!");
  } else if (((a === b) && (b !== c)) || ((b === c) && (a !== b))) {
    return true;
    alert("Isosceles!");
  } else {
    alert("Probably not a triangle!");
  }
};



// else if ((a = b = c)) {
//   return true;
// }
