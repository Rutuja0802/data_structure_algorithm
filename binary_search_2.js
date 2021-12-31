function binary_search(array, target) {
  var start = 0,
    mid = 0,
    last = 6;

  while (start <= last) {
    //find mid point of the array
    mid = parseInt((start + last) / 2);

    if (target == array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      //if target is less than array of mid then search in left side of the array.
      last = mid - 1;
    } else {
      //if target is greter than array of mid then search in right side of the array.
      start = mid + 1;
    }
  }
  return -999;
}
function search() {
  var array = [1, 5, 7, 8, 9, 10, 15];
  var target = 3;
  var index = binary_search(array, target);
  if (index >= 0) {
    console.log(index + 1);
  } else {
    console.log("-1");
  }
}
search();
//if element is found then showing index of that element
//and if element is not found then print -1.
