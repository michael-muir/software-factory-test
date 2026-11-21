# Product requirements: Post-it Board

## Summary

Post-it Board is a tiny browser-based note board served by Node.js. It gives an individual user a friendly place to jot down short thoughts, edit them in place, and remove them when they are done. The project is intentionally small and dependency-free so teams can use it to test a software factory and delegate bounded work to AI agents.

## Problem and audience

People need a low-friction scratchpad for reminders and ideas. The primary user is one person using one browser on one device; this is a demonstration project, not a multi-user collaboration product.

## Goals

- Make it possible to add, edit, and delete notes without leaving the board.
- Keep notes available after reloads in the same browser.
- Make the interface responsive, keyboard accessible, and easy to understand.
- Keep the project straightforward to run and extend, with no runtime dependencies.
- Provide clear, separable enhancements suitable for parallel agent work.

## Non-goals

- Accounts, cloud sync, collaboration, or server-side note storage.
- Rich-text editing, attachments, reminders, or a full project-management system.
- Support for synchronizing notes between browsers or devices.

## MVP requirements

1. Start locally with `npm start` and open the app at `http://localhost:3456` (configurable with the `PORT` environment variable).
2. Add a non-empty note of up to 280 characters.
3. Edit note text directly on its card; changes persist in browser local storage.
4. Delete a note with a clearly named, keyboard-operable control.
5. Show a useful empty state and the current note count.
6. Work at mobile and desktop widths and expose labels/focus indicators to assistive technology users.
7. Run automated unit tests with `npm test`.

## Success criteria

- A first-time user can add, edit, and remove a note without instructions.
- Notes remain after a page reload in the same browser.
- The core workflows work using a keyboard.
- A clean checkout starts and passes its tests with a current Node.js LTS release.

## Product decisions

- Local storage is the only persistence mechanism in the MVP. Clearing browser data removes notes.
- A note is plain text and limited to 280 characters.
- The app does not send note content to a server; the Node server only serves static assets.

## Future task candidates

The roadmap tracks four independent enhancements: choose a color per note, reorder notes, search note text, and export/import a JSON backup. Each should have acceptance criteria and tests, and should not require a framework or service dependency.
