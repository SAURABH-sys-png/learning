/**
 * DOM SELECTORS & MANIPULATION — revision sheet
 * Open in browser: ../html/dom.html
 *
 * Sections:
 *  1. document / window
 *  2. getElementById
 *  3. getAttribute / setAttribute
 *  4. style, textContent, innerHTML, innerText
 *  5. querySelector / querySelectorAll
 */

// ─── 1. document & window ───────────────────────────────────────────────────
// window.document === document (the whole HTML tree as a Document object)
console.log("document:", document);
console.log("document === window.document:", document === window.document);

// document.links → HTMLCollection of every <a> in the page
console.log("all links:", document.links);

// ─── 2. getElementById ──────────────────────────────────────────────────────
// Returns ONE element or null. Fast when you have a unique id.
const heading = document.getElementById("heading");

// Example: change inner HTML (parses tags — can be unsafe with user input)
heading.innerHTML = "<h1>Saurabh</h1>";

// ─── 3. getAttribute / setAttribute ─────────────────────────────────────────
// Read a named attribute from the element
console.log("class attribute:", heading.getAttribute("class")); // "heading"

// Overwrite or add an attribute
heading.setAttribute("class", "test");
console.log("class after setAttribute:", heading.getAttribute("class"));

// ─── 4. style & text properties ─────────────────────────────────────────────
heading.style.backgroundColor = "green";

// textContent — all text inside the node (including hidden), no HTML parsing
const textViaContent = heading.textContent;
console.log("textContent:", textViaContent);

/*
 * innerHTML vs innerText vs textContent (revision)
 * ─────────────────────────────────────────────────
 * textContent  → all text nodes, including hidden (CSS display:none)
 * innerText    → only *visible* text (layout-aware)
 * innerHTML    → string of HTML inside the element (can include child tags)
 *
 * Example on <div id="demo">Hello <span style="display:none">hidden</span> <b>bold</b></div>
 *   textContent → "Hello hidden bold"
 *   innerText   → "Hello bold"
 *   innerHTML   → "Hello <span...>hidden</span> <b>bold</b>"
 */

// ─── 5. querySelector & querySelectorAll ────────────────────────────────────
// querySelector — first match (CSS selector syntax: #id .class tag[attr])
const byClass = document.querySelector(".heading"); // class needs a dot
const byId = document.querySelector("#heading");
console.log("querySelector .heading:", byClass);
console.log("querySelector #heading:", byId);

// querySelectorAll — NodeList of ALL matches (live in older browsers; static in modern)
const allParagraphs = document.querySelectorAll("p");
console.log("querySelectorAll('p') count:", allParagraphs.length);

// NodeList / HTMLCollection are array-like — convert to real array for .map/.filter
const paragraphArray = Array.from(allParagraphs);
paragraphArray.forEach((p, i) => console.log(`p[${i}]:`, p.textContent.slice(0, 40) + "..."));
