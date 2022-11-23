const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.stopBtn.disabled = true;
let isActive = false;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onStart = () => {
  isActive = true;
  if (isActive) {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
};

const onStop = () => {
  isActive = false;
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
};

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);
