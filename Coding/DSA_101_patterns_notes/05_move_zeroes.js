// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// [0 1 0 3 12]
// [1 0 0 3 12] - 0
// [1 3 0 0 12] - 1

//[2 0 1 0 12]
//[2 0 1 0 12]
//[2 1 0 0 12]
//[2 1 12 0 0]

// Example 2:

// Input: nums = [0]
// Output: [0]

// var moveZeroes = function (nums) {
//   let newArr = [];
//   let zeroArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     const el = nums[i];
//     if (el !== 0) {
//       newArr.push(el);
//     } else {
//       zeroArr.push(el);
//     }
//   }
//   return [...newArr, ...zeroArr];
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]));

//New sol. Optimal

//[2 0 1 0 12]
//[2 0 1 0 12]
//[2 1 0 0 12]
//[2 1 12 0 0]

// var moveZeroes = function (nums) {
//   let read = 0;
//   let write = 0;

//   while (write < nums.length) {
//     console.log("read --->", read);
//     console.log("write --->", write);
//     console.log("nums --->", nums);

//     if (nums[read] === 0) {
//       let temp = null;
//       temp = nums[read];
//       nums[read] = nums[write];
//       nums[write] = temp;
//       read++;
//       write++;
//     }
//     write++;
//   }
//   //   return nums;
// };

// var moveZeroes = function (nums) {
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== 0 && nums[left] === 0) {
//       const temp = nums[right];
//       nums[right] = nums[left];
//       nums[left] = temp;
//       left++;
//     }
//     left++;
//   }
//   return nums;
// };

var moveZeroes = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  return nums;
};
console.log(moveZeroes([1, 0, 3, 2, 5]));

//IMP: Note - left jab bhi move ho raha hai, vo zero pe hi ho
//raha hai.
//Kaise ?
// CASE 1:
// Agar multiple zeros hai, sabse peeche wala zero aage chala
// ja raha hai, aur number ko replace kar de raha hai.
//aur jispe left pointer move ho raha hai vo bhi zero hai...
// and not it is sabse pehele wala zero (left most).

//Case 2:
//Single zero ka case toh ease hi hai.
//Isme non-zero number har bar, just agla wala hi number hai...
//aur phir swap hoke, zero uss number ki position pe...
//chala ja raha hai. Phir left pointer shift hoke, zero ki...
//position pe aa jata hai.
