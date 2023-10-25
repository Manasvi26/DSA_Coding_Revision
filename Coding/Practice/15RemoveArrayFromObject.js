let arr = ["four", "one", "two", "three"];

let arrObj = [
  { name: "a", category: "one" },
  { name: "b", category: "two" },
  { name: "c", category: "three" },
  { name: "d", category: "four" },
  { name: "e", category: "five" },
];

//Output: [{ name: "b", category: "two" },{ name: "d", category: "four" }]

const result = arrObj.filter((el) => !arr.includes(el.category));
console.log("result --->", result);
