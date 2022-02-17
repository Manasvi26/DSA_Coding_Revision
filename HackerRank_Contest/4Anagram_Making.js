var s1 = "absdjkvuahdakejfnfauhdsaavasdlkj";
var s2 = "djfladfhiawasdkjvalskufhafablsdkashlahdfa";

// var s1 = "aabbbccde";
// var s2 = "aaabbbde";
//3

function makingAnagrams(s1, s2) {
  var alphas = "abcdefghijklmnopqrstuvwxyz";
  // Write your code here

  //   console.log(s1);
  // console.log(s2);

  var s1_sorted = s1.split("").sort();
  //   console.log(s1_sorted);
  //   console.log("s1_sorted", s1_sorted.length);

  var obj1 = {};

  for (let j = 0; j < s1_sorted.length; j++) {
    if (obj1[s1_sorted[j]] === undefined) {
      obj1[s1_sorted[j]] = 1;
    } else {
      obj1[s1_sorted[j]] = obj1[s1_sorted[j]] + 1;
    }
  }

  //   console.log(obj1);

  var s2_sorted = s2.split("").sort();
  //   console.log(s2_sorted);
  //   console.log("s2_sorted", s2_sorted.length);

  var obj2 = {};

  for (let j = 0; j < s2_sorted.length; j++) {
    if (obj2[s2_sorted[j]] === undefined) {
      obj2[s2_sorted[j]] = 1;
    } else {
      obj2[s2_sorted[j]] = obj2[s2_sorted[j]] + 1;
    }
  }

  //   console.log(obj2);

  var alpha_Obj = {};

  for (let j = 0; j < alphas.length; j++) {
    if (alpha_Obj[alphas[j]] === undefined) {
      alpha_Obj[alphas[j]] = 1;
    } else {
      alpha_Obj[alphas[j]] = alpha_Obj[alpha_Obj[j]] + 1;
    }
  }

  //   console.log(alpha_Obj);

  var total = 0;
  for (const key in alpha_Obj) {
    if (obj1[key] === undefined && obj2[key] === undefined) {
      continue;
    } else {
      if (obj1[key] === undefined) {
        absDiff = obj2[key];
      } else if (obj2[key] === undefined) {
        absDiff = obj1[key];
      } else {
        absDiff = Math.abs(obj1[key] - obj2[key]);
      }
    }

    //   console.log(absDiff);

    total = total + absDiff;
  }

  // console.log("total", total);
  return total;
}

// makingAnagrams(s1, s2);

console.log(makingAnagrams(s1, s2));
