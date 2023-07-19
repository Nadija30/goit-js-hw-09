const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop)
let id = null;
btnStop.disabled = true;
function onStart() {
btnStart.disabled = true;
btnStop.disabled = false;
id = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
  }, 1000);        
}
function onStop() {
btnStart.disabled = false;
btnStop.disabled = true;
clearInterval(id);   
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
