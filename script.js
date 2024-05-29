console.log("loaded");

const rootElement = document.querySelector("div");
console.log(rootElement);

const logClicked = () => console.log("clicked");

rootElement.addEventListener("click", logClicked);

console.log("script end");
