let str = "abc";
//Substrings are continous
// [["a"], ["a", "b"], ["a", "b", "c"], ["b"], ["b", "c"], ["c"]];

function generateSubstrings(str) {
  let strArr = str.split("");
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    let substring = [];
    for (let j = i; j < strArr.length; j++) {
      substring.push(strArr[j]);
      result.push([...substring]);
    }
  }

  return result;
}

console.log(generateSubstrings(str));

//Notes:
//Substrings are continous.
//Can be generated by two loops.
//Keep result array inside second loop.
