// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// let s = "()";
// Output: true
// Example 2:

// let s = "()[]{}";
// Output: true
// Example 3:

let s = "{{";
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function checkValidity(string) {
  let strArr = string.split("");
  let stack = [];
  if (strArr.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "(" || strArr[i] === "[" || strArr[i] === "{") {
      stack.push(strArr[i]);
    } else if (
      (strArr[i] === ")" && stack[stack.length - 1] === "(") ||
      (strArr[i] === "]" && stack[stack.length - 1] === "[") ||
      (strArr[i] === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length) {
    return false;
  } else return true;
}
console.log(checkValidity(s));
