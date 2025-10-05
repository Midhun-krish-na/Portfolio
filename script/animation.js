const words = ["DEVELOPER", "DESIGNER", "PROGRAMMER"];
const element = document.getElementById("dynamic-typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 120;

function type() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    // Typing forward
    element.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, 1200); // pause before deleting
      return;
    }
  } else {
    // Deleting
    element.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 70 : typingSpeed);
}

type();
