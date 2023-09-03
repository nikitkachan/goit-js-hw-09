const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const buttonStart = buttons[0];
const buttonStop = buttons[1];
let timerId = null;

buttonStart.addEventListener("click", onClickStart);
buttonStop.addEventListener("click", onClickStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onClickStart() {
    changeColors();
    timerId = setInterval(changeColors, 1000)
    buttonStart.setAttribute('disabled', 'true');
};

function onClickStop() {
    clearInterval(timerId);
    buttonStart.removeAttribute('disabled');
};

function changeColors(params) {
    body.style.backgroundColor = getRandomHexColor();
};