//Q.Write a recursive code to find the x^y . example: 2^5 = 32.
function power(x, y) {
  var temp;
  if (y == 0) return 1;
  temp = power(x, parseInt(y / 2));
  if (y % 2 == 0) return temp * temp;
  else {
    if (y > 0) {
      return x * temp * temp;
    } else {
      return (temp * temp) / x;
    }
  }
}

console.log(power(2, 5));
