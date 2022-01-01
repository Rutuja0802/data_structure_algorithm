function minimum(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log("minimum array in element is=", min);
}
minimum([3, 5, 6, 7, 8, 9]);
