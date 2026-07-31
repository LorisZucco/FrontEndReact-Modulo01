const double = function (num) {
  return num * 2;
};

console.log(double(7));

const triple = (num) => num*3;
 
console.log(triple(7));


function apply(value, operation) {
    return operation(value)
}
console.log(apply(3, triple))
console.log(apply(3, double))


