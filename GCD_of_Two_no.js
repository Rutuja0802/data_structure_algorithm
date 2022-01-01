//Q.Find GCD of two number using recursion. GCD(4,8) => 4.

function GCD(x,y) {
    while (x!=y) {
        if (x>y) {
            return GCD(x-y,y);
        }else {
            return GCD(x,y-x);
        }
    }
    return x;
}
console.log (`GCD of two no. is =`+GCD(4,8));