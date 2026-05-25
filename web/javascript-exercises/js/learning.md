# JavaScript exercises — revision notes

Master index of concepts from the `js/` folder. Open the linked HTML page in a browser and use **DevTools → Console**.

| Topic | File | Practice page |
|--------|------|----------------|
| Strings | `strings.js` | [basics.html](../html/basics.html) |
| Numbers | `numbers.js` | [basics.html](../html/basics.html) |
| Dates | `dates.js` | [basics.html](../html/basics.html) |
| Arrays | `arrays.js` | [basics.html](../html/basics.html) |
| Stack / heap | `memory.js` | [basics.html](../html/basics.html) |
| Objects | `objects.js` | [basics.html](../html/basics.html) |
| Destructuring | `objects_destructuring.js` | [basics.html](../html/basics.html) |
| Functions | `functions.js` | [functions-scope.html](../html/functions-scope.html) |
| Rest `...` | `rest.js` | [functions-scope.html](../html/functions-scope.html) |
| Scope | `scope.js` | [functions-scope.html](../html/functions-scope.html) |
| Closure | `closure.js` | [functions-scope.html](../html/functions-scope.html) |
| Hoisting | `hoisting.js` | [functions-scope.html](../html/functions-scope.html) |
| `this` / arrows | `this_arrow_function.js` | [functions-scope.html](../html/functions-scope.html) |
| IIFE | `iife.js` | [functions-scope.html](../html/functions-scope.html) |
| Execution context | `js_execution_context.js` | [functions-scope.html](../html/functions-scope.html) |
| `==` / `===` | `control_flow.js` | [control-flow.html](../html/control-flow.html) |
| Map | `map.js` | [control-flow.html](../html/control-flow.html) |
| for…of | `for_of.js` | [control-flow.html](../html/control-flow.html) |
| querySelectorAll | `index.js` | [dom-practice.html](../html/dom-practice.html) |

**DOM selectors:** see `../dom-selectors/all_dom_selectors.js` and [dom.html](../html/dom.html).

---

## `strings.js`

- **Concatenation:** `"a" + "b"`.
- **Template literals:** backticks + `${expression}`.
- **`new String()`:** wrapper object; use `.valueOf()` for primitive (rarely needed).

---

## `numbers.js`

- **`new Number(1000)`** → object; **`valueOf()`** → primitive `1000`.
- Prefer literals: `const n = 1000`.

---

## `dates.js`

- **`new Date()`** — now.
- **`toDateString()`** — date part; **`toTimeString()`** — time part.

---

## `arrays.js`

- **`push(arr)`** — adds whole array as **one nested element**.
- **`concat(arr)`** — **new flat array** with elements merged.

---

## `memory.js`

- **Stack:** primitives; references (pointers).
- **Heap:** objects, arrays.
- **`let b = a`** (objects) — same reference; mutating `b` changes `a`.
- **`{ ...a }`** — shallow copy, new object in heap.

---

## `objects.js`

- **Literal** `{ key: value }`.
- **`Symbol()`** — unique keys; access with **`obj[sym]`**.
- **`Object.freeze(obj)`** — properties cannot change.

---

## `objects_destructuring.js`

- **`const { pric3 } = course`** — pull matching property names.
- Rename: **`const { coursename: title } = course`**.

---

## `functions.js`

- Return template strings; **`undefined` is falsy**.

---

## `rest.js`

- **`...nums`** — collects remaining args into an **array**; must be last parameter.

---

## `scope.js`

- **`let` / `const`** — block scope.
- **`var`** — function scope (legacy).
- Accessing block variable outside `{}` → **ReferenceError**.

---

## `closure.js`

- Inner function retains outer variables.
- Returning inner function keeps closure alive.

---

## `hoisting.js`

- **`var`** hoisted as **`undefined`** until assignment line.
- **Function declarations** fully hoisted — callable before declaration line.

---

## `this_arrow_function.js`

- **Regular method:** `this` = caller object.
- **Arrow on object:** no own `this` — lexical `this` from surrounding scope.

---

## `iife.js`

- **`(function () { })();`** — run immediately, private scope.

---

## `js_execution_context.js`

- **Global / function / eval / module** contexts.
- **Memory phase** then **execution phase**; hoisting behavior differs for `var`, `let`, `function`.

---

## `control_flow.js`

- **`===`** strict; **`==`** coerces types.

---

## `map.js`

- **`Map`** — any key type, unique keys, insertion order, `.set` / `.get` / `.size`.

---

## `for_of.js`

- **`for (const x of arr)`** — values, not indices.
- Use **`arr.entries()`** for index + value.

---

## `index.js`

- **`document.querySelectorAll("p")`** → NodeList.
- **`.innerText`** — visible text per element.
