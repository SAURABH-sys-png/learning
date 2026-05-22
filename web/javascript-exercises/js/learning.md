# JavaScript exercises — learning notes

Notes collected from comments in the exercise files in this folder.

---

## `strings.js`

- How the native or industry standard strings are used.
- **Simple concatenation:** join strings with `+`.
- **Template literals:** use backticks for concatenation; string interpolation lets you embed expressions inside a string.
- Another approach is the built-in `String` constructor: `new String("hello world")`.

---

## `numbers.js`

- `new Number(1000)` creates a Number object; `valueOf()` returns the primitive value.
- We can also use the built-in `Number` constructor with `new`.

---

## `dates.js`

- `new Date()` gives the current date and time.
- `toDateString()` — current date as a string.
- `toTimeString()` — current time as a string.

---

## `arrays.js`

- `push()` can add an entire array as a single element (nested array inside the parent).
- `concat()` merges arrays into a new flat combined array.

---

## `memory.js`

- **Two types of memory:** stack and heap.
- **Stack memory** is used for primitive data types and function calls.
- **Heap memory** is used for objects and arrays.
- In stack memory, a variable is created and assigned a value.
- When you assign `let usertwo = mtyobj`, both variables point to the **same object** in heap memory (not a deep copy). Changing `usertwo.name` updates what `mtyobj` sees too.
- To create a **new object** in heap memory, use the **spread operator**.

---

## `objects.js`

- **Singleton object** vs **object literal** patterns.
- **Symbols:** use `Symbol()` for unique keys; access with bracket notation `myObj[mySym]`.
- **Freezing:** `Object.freeze()` prevents changing properties afterward.

---

## `functions.js`

- `undefined` is considered **falsy** in conditionals.

---

## `rest.js`

- When the number of parameters is not known, use the **rest operator** (`...nums`).
- It returns an **array** of the remaining arguments.

---

## `scope.js`

- **What are scopes?** Contexts where variables and functions are defined and can be accessed. They control visibility and lifetime.
- In JavaScript there are three types: **global scope**, **function scope**, and **block scope**.
- `{}` defines the scope of a block (e.g. inside `if`).
- Variables declared with `let`/`const` inside a block are **block-scoped** — accessing them outside throws `ReferenceError`.

---

## `closure.js`

- Inner functions can close over variables from an outer function’s scope (e.g. `displayUsername` inside `one()` reading `username`).
- A function that returns an expression (e.g. `return n++`) evaluates before returning.

---

## `hoisting.js`

- A JS function runs inside an **execution context** — the environment created when the function is called and destroyed when it returns.
- The execution context has two phases: **creation** and **execution**.
- Variables declared with **`var`** are hoisted to the top of their scope and initialized as **`undefined`**, so you can read them before the line where they are assigned.

---

## `this_arrow_function.js`

- **`this` in arrow functions:** arrow functions do not bind their own `this`; they inherit `this` from the enclosing lexical scope.
- Regular method: `this` refers to the object (`obj`).
- Arrow method on the same object: `this` is **not** the object (often `undefined` in strict mode / module context).

---

## `iife.js`

- **Immediately Invoked Function Expression (IIFE):** a function that runs as soon as it is defined.
- Also called a self-executing anonymous function.
- Wrapped in `()` to create a private scope and avoid polluting the global namespace.
- The trailing `()` invokes the function immediately.
- Useful for private variables and one-time setup code.

---

## `js_execution_context.js`

- **`{}` / global execution context:** why the `window` object exposes global variables and functions as properties and methods.
- **Eval execution context:** created when `eval()` runs a string of code in the caller’s scope.
- **Module execution context:** created when a module is imported; code runs in the module’s own scope.
- **Phases:** memory creation phase, then execution phase.
- In the **memory creation phase**, variables and functions are hoisted: variables start as `undefined`, functions get their full definition. That is why you can call a function before its declaration line, but variables read early are `undefined` until assignment.

---

## Files without comment notes

| File | Notes |
|------|--------|
| `index.js` | DOM practice (`querySelectorAll`, `innerText`) — no inline comments |
| `objects_destructuring.js` | Destructuring `{ pric3 }` from `course` — no inline comments |
