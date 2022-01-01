function maximum(array) {
  let max = array[0];

  // assuming max value index 0; thats why keep i=1 in for loop
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log("maximum element in array is-" + max);
}

maximum([1, 2, 3, 4, 5, 6]);
