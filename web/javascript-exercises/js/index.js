/**
 * querySelectorAll + innerText — revision
 * HTML: ../html/dom-practice.html
 *
 * querySelectorAll(css) → NodeList (all matches)
 * [0].innerText → visible text of first match
 */

const paragraphs = document.querySelectorAll("p");
console.log("paragraph count:", paragraphs.length);

paragraphs.forEach((el, i) => {
  console.log(`p[${i}] innerText:`, el.innerText);
  // Alerts removed so the page is easier to study; uncomment to demo:
  // alert(el.innerText);
});
