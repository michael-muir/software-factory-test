# Software Factory Test: Post-it Board

A small Node.js-served, browser-based Post-it board for experimenting with software-factory workflows and parallel AI-agent tasks.

## Run it

Requires Node.js 18 or newer. From the repository root:

```bash
npm start
```

Open <http://localhost:3456>. To use a different port, set the `PORT` environment variable (for example `PORT=4000 npm start`, or `$env:PORT=4000; npm start` in PowerShell). Notes are saved in this browser's local storage. Run the tests with `npm test`.

## Project documents

- [Product requirements](docs/PRD.md)
- [Product roadmap](docs/ROADMAP.md)

## Factory task areas

The starter implements the core board and note lifecycle. Follow-on work is split into small, independently assignable enhancements: color labels, note reordering, search, and import/export. Each task should preserve the lightweight, dependency-free approach and include tests where practical.
