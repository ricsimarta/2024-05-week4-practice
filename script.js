/* console.log("hello world");

helloWorld();

function helloWorld() {
  console.log("hello world from the function");
  
  helperFunction();

  function helperFunction() {
    console.log("i am helping");
  }
  
  const functionVariable = "text"
  console.log(functionVariable);
}

console.log("hello world 2");

const coolerHelloWorld = function() {
  console.log("hello world from the cooler function");
}

coolerHelloWorld();

const coolestHelloWorld = () => {
  console.log("hello world from the coolest function");
}

coolestHelloWorld(); */

function sumOfTwoNumbers(number1, number2) {
  return number1 + number2;
}

function multiplyTwoNumbers(number1, number2) {
  return number1 * number2;
}

/* const result = sumOfTwoNumbers(5, 10);
console.log("result: ", result); */

/* console.log(sumOfTwoNumbers(20, 2));

const arrowSumOfTwoNumbers = (number1, number2) => number1 + number2;

console.log(arrowSumOfTwoNumbers(1, 2)); */

function doSomeMagic(number1, number2, callback) {
  return callback(number1, number2);
}

console.log(doSomeMagic(1, 2, sumOfTwoNumbers));
console.log(doSomeMagic(1, 2, multiplyTwoNumbers));
console.log(doSomeMagic(10, 2, (number1, number2) => number1**number2));
console.log(doSomeMagic(10, 2, function (number1, number2) {
  return number1**number2
}));