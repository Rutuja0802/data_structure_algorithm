//Q.Write a recursive code to find the factorial of a user defined N
//example : N = 5 => 5! => 120 must be printed on screen.

var number = 5;
var fact = 1;
console.log(fact);

function factorial(n) {
  if (n > number) {
    return;
  }
  var tmp = fact;
  fact = fact * n;
  console.log(tmp + "x " + n + "=" + fact);
  n++;
  factorial(n);
}
factorial(1);
console.log(`the factorial of ${number} is ${fact}`);
