var str = "abc";
var temp = [];
function subString(str, k) {
  // ye "k" ki bhasad dekh lena bhai
  for (let i = k; i < str.length; i++) {
    temp.push(str[i]);

    console.log(temp.join(" "));

    subString(str, i + 1); //this is the tricky step
    temp.pop();
  }
}

subString(str, 0);
