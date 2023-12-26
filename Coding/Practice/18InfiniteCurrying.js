//Implement add(2)(3)(4)(5)()

//Ans.
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

// console.log(add(2)(3)(4)(5)());

//Implement
// const result = calc.add(10).multiply(5).substract(30).add(20);

//Ans.
// const calc = {
//   total: 0,
//   add: function (a) {
//     this.total = this.total + a;
//     return this;
//   },

//   multiply: function (b) {
//     this.total = this.total * b;
//     return this;
//   },

//   substract: function (c) {
//     this.total = this.total - c;
//     return this;
//   },
// };

// const result = calc.add(10).multiply(5).substract(30).add(20);
// console.log(result.total); //40

//Implement

const calc = {
  total: 0,
  add: function (a) {
    this.total = this.total + a;
    return this;
  },

  substract: function (b) {
    this.total = this.total - b;
    return this;
  },

  multiply: function (c) {
    this.total = this.total * c;
    return this;
  },
};

const result = calc.add(10).multiply(5).substract(30).add(20);

// console.log(result.total);

function addNew(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(addNew(2)(3)(4)(5)(10)());
