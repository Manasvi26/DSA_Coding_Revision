var t = "manasvi";

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

makeAnObject(t);
