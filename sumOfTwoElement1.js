//search target value adding two elements in array.
function mostFrequent(arr, target) {
    let result =[]
    let numIndex =new Map();
    for (var i = 0; i < arr.length; i++) {
       let num = arr[i];
       let compliment = target - num;
       if (numIndex.has(compliment)) {
           result[0]=numIndex.get(compliment);
           result[1]=i;
           console.log(result[0],result[1])
           return result ;
       }
       numIndex.set(num,i) 
    }
    return result;
}
arr =[2,3,4];
target = 6;
mostFrequent(arr,target)