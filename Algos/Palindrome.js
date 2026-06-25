let str = "kayak";
function checkPallindrome(word) {
  let newStr = "";
  for (let i = word.length - 1; i >= 0; i--) {
    console.log(i);
    newStr = newStr + word[i];
  }

  if (newStr === word) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPallindrome(str));
