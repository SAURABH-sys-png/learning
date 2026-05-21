# Learning

Personal notes, exercises, and small projects for JavaScript, React, and web development.

## Layout

```
learning/
├── books/                    # Reference material
│   └── you-dont-know-js/     # *You Don't Know JS* (2nd ed.)
├── react/
│   └── freecodecamp/         # FreeCodeCamp React curriculum
│       ├── fundamentals/     # Vite + React exercises
│       ├── playground/       # Quick experiments
│       └── notes/            # Session notes (.txt)
└── web/
    ├── fundamentals/         # HTML, CSS, and vanilla JS
    ├── javascript-exercises/ # Focused JS drills
    ├── full-stack-open/      # University of Helsinki course work
    ├── practice-projects/    # Small apps and demos
    ├── react-intro/          # Early React snippets
    ├── study-notes/          # Written notes
    ├── tailwind/             # Tailwind CSS practice
    └── vanilla-practice/     # DOM / vanilla JS practice
```

## Quick start

### FreeCodeCamp React (fundamentals)

```bash
cd react/freecodecamp/fundamentals
npm install
npm run dev
```

### Full Stack Open (Part 1)

```bash
cd web/full-stack-open/part-1
npm install
npm run dev
```

### LR Connect chat (Next.js)

```bash
cd web/practice-projects/lr-connect-chat/secure-chat-app
npm install
npm run dev
```

## Books

| Path | Description |
|------|-------------|
| [books/you-dont-know-js](books/you-dont-know-js) | [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) — read chapters in order from `get-started/` |

## Web practice projects

| Project | Stack |
|---------|--------|
| `defence-eligibility-calculator` | HTML + JS |
| `lr-connect-chat/secure-chat-app` | Next.js |
| `rock-paper-scissors` | HTML + JS |

## Notes

- Run `npm install` in any folder with a `package.json` before starting dev servers.
- `node_modules/`, `.next/`, and other build artifacts are gitignored — they are not stored in this repo.
