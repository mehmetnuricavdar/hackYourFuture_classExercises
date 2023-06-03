const firstButton = document.querySelector("#first");
const secondButton = document.querySelector("#second");
const delayButton = document.querySelector("#delay");

let result = 0;
const countClicker = () => {
  console.log(result);
  result++;
};

const countRemover = () => {
  result--;
  console.log(result);
};

const timeFunction = () => {
  setTimeout(countClicker, 3000);
};

firstButton.addEventListener("click", countClicker);
secondButton.addEventListener("click", countRemover);
delayButton.addEventListener("click", timeFunction);

//onload function

const onloadFunc = () => {
  console.log("Page is loaded");
};

window.addEventListener("load", onloadFunc);

//mouse event

/*
const showCoords = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const coords = `X coords: ${x} Y coords: ${y}`;
  document.querySelector("#demo").innerHTML = coords;
};

window.addEventListener("click", showCoords);
*/
// mouse event average
const xArray = [];

const yArray = [];
const showCoords = (event) => {
  const x = event.clientX;
  const y = event.clientY;

  xArray.push(x);
  yArray.push(y);
  console.log("X", xArray);
  console.log("Y", yArray);
  const sumX = xArray.reduce((a, b) => a + b, 0);
  const avgX = sumX / xArray.length;
  const sumY = yArray.reduce((a, b) => a + b, 0);
  const avgY = sumY / yArray.length;

  const coords = `The mouse X and Y coords sum are: ${sumX}, ${sumY}. Their averages are: ${avgX.toFixed(
    3
  )} and ${avgY.toFixed(3)}.`;
  document.querySelector("#demo").innerHTML = coords;
};

const delayedMouseFunc = () => {
  setTimeout(showCoords(event), 5000);
};

window.addEventListener("click", delayedMouseFunc);
