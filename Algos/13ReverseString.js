let str = "manasvi";

function reverseStr(str) {
  let strArr = str.split("");

  let i = 0;
  let j = strArr.length - 1;

  while (i <= j) {
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }

  const result = strArr.join("");

  return result;
}

console.log(reverseStr(str));

let sentence = "My name is Manasvi Sharma";
