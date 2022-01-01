//Q.Write a recursive code for printing the Fibonacci series up to N. 
	//example : if the user enters 10 , then print 1,1,2,3,5,8,13,21,34,55 
 
 const num =10;
 let x = 0;
 let y = 1;

 let fn = x+y;
 console.log(x)
 while (fn<num) {//while loop 1st check condition and then go in loop.
     console.log(fn);
     fn =x+y;//it will run in loop
     x=y;
     y=fn;
 }