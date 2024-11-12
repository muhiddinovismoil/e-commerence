// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

const add = a => b => c => a + b + c;

console.log(
  add(1)(3)(10)
)
