//Q.Reverse a number using a recursive program
function reverseNum(number) {
    if (number < 10) {
        console.log(number);
        return;
    }else{
        console.log(number%10);
        reverseNum( parseInt(number/10));
    }
}
reverseNum(123458);