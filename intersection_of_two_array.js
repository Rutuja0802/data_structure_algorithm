var nums1 =[1,2,2,1]
var nums2 =[2,2];
let intersection = nums1.filter((curElem)=>{
  return nums2.includes(curElem);

});
console.log([...new Set(intersection)].reverse());
//remove duplicate value and gives one unique value