//  civic, radar, level, rotor, kayak, madam, and refer.
var isPalindrome = function (word) {
  var check = true;
  var n = Math.floor(word.length / 2); //n
  for (var i = 0; i <= n; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      check = false;
      break;
    }
  }
  return check;
};
var str = "kayak";
isPalindrome(str);
