// const calc = {
//   total: 0,

//   add(a) {
//     this.total = this.total + a;
//     return this; //most important
//   },
//   multiply(a) {
//     this.total = this.total * a;
//     return this;
//   },
//   substract(a) {
//     this.total = this.total - a;
//     return this;
//   },
// };

//or can be written like

const calc = {
  total: 0,

  add(a) {
    this.total += a;
    return this; //most important
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  substract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
