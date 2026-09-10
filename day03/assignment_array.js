function countOccurrences(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      count = count + 1;
    }
  }

  return count;
}

let nums = [2, 4, 5, 2, 1, 2];
let k = 2;

console.log(countOccurrences(nums, k)); 