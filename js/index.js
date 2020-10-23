const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector("body");

let timerId = null;

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

startRef.addEventListener("click", () => {
  timerId = setInterval(() => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    bodyRef.style.backgroundColor = random;
    if ((bodyRef.style.backgroundColor = random)) {
      startRef.disabled = true;
    }
  }, 1000);
});

stopRef.addEventListener("click", () => {
  clearInterval(timerId);
  startRef.disabled = false;
});
