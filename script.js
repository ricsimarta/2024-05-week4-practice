console.log("hello world");

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