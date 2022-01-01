// Calculate the avg of elements of an array using recursive code.

function findMean(A, N) {
  if (N == 1) return A[N - 1];
  else return (findMean(A, N - 1) * (N - 1) + A[N - 1]) / N;
}

// float Mean = 0;
let A = [1, 2, 3, 4, 5];
let N = A.length;
console.log(findMean(A, N));
