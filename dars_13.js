


let arr = [1, 1, 2, 3, 3, 4, 3, 2, 5, 6, 6, 6, 6];
let key = arr.filter((value, index, array) => array.indexOf(value) === index);
console.log(key);

// ====================================================

var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += num;
    console.log(sum);
  }
};
summation(9);

