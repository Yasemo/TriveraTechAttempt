const circle = document.querySelector('.quickSkills__circle');
const strLength = circle.innerText.length;
const innerText = circle.innerText;

let x = 0;
setInterval(loopHandler, 10, x);

function loopHandler(x) {
  let y = (-1 * Math.cos(x) + 1) / 2
  circle.innerText = innerText.substring(0, Math.round(y * strLength));
  x += 0.1;
  return x;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}