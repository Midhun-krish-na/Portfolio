const words = ['DEVELOPER','GAME-DEV','PROGRAMMER','DESIGNER'];
let index = 0;
const wordElement = document.getElementById('dynamic-txt');

setInterval(() => {
  wordElement.classList.add("fade-out");
  setTimeout(() => {
    index = (index + 1) % words.length;
    wordElement.textContent = words[index];
    wordElement.classList.remove("fade-out");
  }, 500); // match transition time
}, 2500);