// 32. Longest Valid Parentheses

// Given a string containing just the characters '(' and ')',
// return the length of the longest valid(well - formed) parentheses
// substring
// .

// Example 1:

// let s = "(()";
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// let s = ")()())";
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// let s = ""
// Output: 0

// let s = "()()()";
// Output: 6
// Example 3:

// let s = "{{";

// let s = "";

let s = "()(()";

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

// function checkValidity(strArr) {
//   let stack = [];
//   if (strArr.length % 2 !== 0) {
//     return false;
//   }
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === "(" || strArr[i] === "[" || strArr[i] === "{") {
//       stack.push(strArr[i]);
//     } else if (
//       (strArr[i] === ")" && stack[stack.length - 1] === "(") ||
//       (strArr[i] === "]" && stack[stack.length - 1] === "[") ||
//       (strArr[i] === "}" && stack[stack.length - 1] === "{")
//     ) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }
//   if (stack.length) {
//     return false;
//   } else return true;
// }

// function longestValidParenthesis(string) {
//   function generateSubstrings(str) {
//     let strArr = str.split("");
//     let result = [];

//     for (let i = 0; i < strArr.length; i++) {
//       let substring = [];
//       for (let j = i; j < strArr.length; j++) {
//         substring.push(strArr[j]);
//         result.push([...substring]);
//       }
//     }

//     return result;
//   }

//   let result = generateSubstrings(string);

//   let maxSize = 0;
//   for (let i = 0; i < result.length; i++) {
//     if (checkValidity(result[i])) {
//       let size = result[i].length;
//       if (size > maxSize) {
//         maxSize = size;
//       }
//     }
//   }
//   return maxSize;
// }

// console.log("maxSize --->", longestValidParenthesis(s));

// Example usage: ACCEPTED ANSWER

const inputString = "(())(";

function longestValidParentheses(s) {
  let maxLen = 0;
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    console.log("stack -->", stack);
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLen;
}

console.log("maxSize --->", longestValidParentheses(inputString));

//Notes:
//Only single type of bracket will be there. Here small bracket i.e. "(" or ")".
//
