// Minimum
// Your code here.
function min(a,b) {
  if (a > b) {
   return b;
  } else {
   return a;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion
// Your code here.
function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Bean Counting
// Your code here.

/*function countBs(str) {
  var count = 0;
  var newArray = str.split('');
  console.log(newArray)
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] == "B")
    count += 1;
  }
  return count;
}

function countChar(str, char) {
  var count = 0;
  var newArray = str.split('');
  console.log(newArray)
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === char) {
      count += 1;
      console.log(count)
    }
  return count;
  }
}*/

/*function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) == char)
      count += 1;
  return count;
}*/

function countBs(str) {
  var count = 0;
  var newArray = str.split('');
  for (var i = 0; i < newArray.length; i++)
    if (newArray[i] == "B")
    count += 1;
  return count;
}

function countChar(str, char) {
  var count = 0;
  var newArray = str.split('');
  for (var i = 0; i < newArray.length; i++)
    if (newArray[i] === char)
    count += 1;
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
