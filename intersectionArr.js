function FindIntersection(strArr) {
  const A = strArr[0].split(',').map(s => Number(s.trim()));
  const B = strArr[1].split(',').map(s => Number(s.trim()));

  let i = 0;
  let j = 0;
  const result = [];

  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) {
      result.push(A[i]);
      i++;
      j++;
    } else if (A[i] < B[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result.length ? result.join(',') : "false";
}




//Have the function FindIntersection(strArr) read the array of strings stored 
// in strArr which will contain 2 elements: the first element will 
// represent a list of comma-separated numbers sorted in ascending order, 
// the second element will represent a second list of comma-separated 
// numbers (also sorted). Your goal is to return a comma-separated string 
// containing the numbers that occur in elements of strArr in sorted order. 
// If there is no intersection, return the string false.