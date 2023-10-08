var str1 = "listen";
var str2 = "silent";

// Conditions:
// 1. Lenght should be same.
//2. Occurence of a letter should be the same.
//Solution 1
const isAnagram = (word1, word2) => {
  let result = true;

  if (word1.length === word2.length) {
    let new1 = JSON.stringify(word1.split("").sort());
    let new2 = JSON.stringify(word2.split("").sort());
    if (new1 !== new2) {
      result = false;
    }
  } else {
    result = false;
  }

  return result;
};

// const res = isAnagram(str1, str2);
// console.log("res --->", res);

//Souution2

const makeAnObject = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    const element = str[i];
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count = count + 1;
      }
    }
    obj[str[i]] = count;
  }
  return obj;
};

const isAnagram2 = (word1, word2) => {
  let result = true;

  if (word1.length === word2.length) {
    const newObj1 = makeAnObject(word1);
    const newObj2 = makeAnObject(word2);
    const objLength1 = Object.keys(newObj1).length;
    const objLength2 = Object.keys(newObj1).length;

    if (objLength1 > objLength2) {
      for (const key in newObj1) {
        if (newObj1[key] !== newObj2[key]) {
          result = false;
          return result;
        }
      }
    } else {
      for (const key in newObj2) {
        if (newObj2[key] !== newObj1[key]) {
          result = false;
          return result;
        }
      }
    }
  } else {
    result = false;
  }

  return result;
};

const res = isAnagram2(str1, str2);
console.log("res --->", res);
