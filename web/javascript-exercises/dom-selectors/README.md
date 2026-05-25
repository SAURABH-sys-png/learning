# `dom-selectors/` — DOM API revision

Previously split across `Dom_Intro/dom_01.js` … `dom_04.js`. Everything is now in one file:

## `all_dom_selectors.js`

| Section | APIs |
|---------|------|
| 1 | `document`, `window.document`, `document.links` |
| 2 | `getElementById`, `innerHTML` |
| 3 | `getAttribute`, `setAttribute` |
| 4 | `.style`, `textContent`, `innerHTML` vs `innerText` |
| 5 | `querySelector`, `querySelectorAll`, `Array.from` |

## Practice page

Open **[../html/dom.html](../html/dom.html)** in a browser (Live Server or `file://`).

The page includes:

- `#heading` — id + class selectors
- Multiple `<p>` tags — `querySelectorAll`
- `#demo` — hidden span for textContent vs innerText study

## Selector cheat sheet

```js
document.getElementById("heading")     // one id
document.querySelector(".heading")     // first .class
document.querySelector("#heading")     // first #id
document.querySelectorAll("p")         // all <p> → NodeList
```

Remember: **class selectors need a dot** (`.heading`), **ids need hash** (`#heading`).
