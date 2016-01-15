var triTrack = function(a, b, c) {
  if ((a !== b) && (a !== c) && (b !== c)) {
    return true;
    alert("Scalene!")
  } else if (( a === b ) && (a === c) && ( b === c )) {
    return true;
  } else if (((a === b) && (b !== c)) || ((b === c) && (a !== b))) {
    return true;
  }
};



// else if ((a = b = c)) {
//   return true;
// }
