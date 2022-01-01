
//primary function isPalindrome takes one string as a parameter.
//and check string is palindrome or not.
function isPalindrome(str) {
    //for additional parameter taking a helper function.
    //helper function take str,start of string and last of string.
    return isPalindrome_helper(str,0,Array.length-1)
}
// defining a function
function isPalindrome_helper(str,start,end){
    if (start>=end) {
        return console.log (true); 
        
    }else if
          (str.charAt(start)!==str.charAt(end))
          return console.log (false);
            return isPalindrome_helper(str,start+1,end-1); 
    
         
}
isPalindrome("abccba")