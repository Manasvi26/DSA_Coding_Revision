var c = [0, 0, 1, 0, 0, 1, 0]; //4
// var c = [0, 0, 0, 0, 1, 0]; //3
// var c = [0, 0, 0, 1, 0, 0]; //3

function jumpingOnClouds(c) {
  // Write your code here

  // console.log(c);

  var i = 0;
  var jump = 0;
  while (i < c.length) {
    i += 2;

    if (c[i] === 1) {
      i--;
    }

    // console.log(i);
    jump++;
  }

  if (i > c.length) {
    return jump - 1;
  } else {
    return jump;
  }

  //   return jump;
}

console.log(jumpingOnClouds(c));
