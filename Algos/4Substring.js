let str = "abc";

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
