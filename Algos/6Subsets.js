//subsets
//input = "abc";
//output:
// []
// [ 'a' ]
// [ 'a', 'b' ]
// [ 'a', 'b', 'c' ]
// [ 'a', 'c' ]
// [ 'b' ]
// [ 'b', 'c' ]
// [ 'c' ]

// var str = "abc";
// var arr = str.split("");
// // console.log(arr);

// var temp = [];

// function subsets(arr, temp, k) {
//   if (temp.length === 0) {
//     //subset will contain empty set too! as empty set is also a set.
//     console.log(temp);
//   }

//   for (let i = k; i < arr.length; i++) {
//     temp.push(arr[i]);

//     console.log(temp.join(" "));

//     subsets(arr, temp, i + 1);

//     temp.pop();
//   }
// }

// subsets(arr, temp, 0);

//Better understandable approach

let arr = [1, 2, 3];

let sum = 4;

function subsets(arr) {
  let result = [];
  let temp = [];

  function generateSubsets(nums, i) {
    if (i === nums.length) {
      // console.log(temp.join(" ")); //to print the sets in a text form
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    generateSubsets(nums, i + 1);
    temp.pop();
    generateSubsets(nums, i + 1);
  }

  generateSubsets(arr, 0);
  return result;
}

const res = subsets(arr);
console.log(res);
