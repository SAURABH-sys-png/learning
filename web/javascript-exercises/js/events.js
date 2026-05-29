// 1. Grab the HTMLElement from the DOM
const box = document.querySelector('.pulsing-box');

// 2. Listen for when the animation begins
box.addEventListener('animationstart', (event) => {
  console.log(`Animation "${event.animationName}" has started!`);
  box.textContent = "Started...";
});

// 3. Listen for the completion of each repeat/loop
box.addEventListener('animationiteration', (event) => {
  // event.elapsedTime tells you how many seconds have passed since the animation started
  console.log(`Loop finished. Time elapsed: ${event.elapsedTime}s`);
  box.style.backgroundColor = '#ef4444'; // Change color mid-way
});

// 4. Listen for when the animation is completely finished
box.addEventListener('animationend', (event) => {
  console.log(`Animation "${event.animationName}" is fully complete.`);
  box.textContent = "Done!";
  
  // Common use case: Remove the element or trigger a clean-up function
  // box.remove(); 
});