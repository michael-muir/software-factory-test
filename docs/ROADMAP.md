# Product roadmap: Post-it Board

This roadmap is designed for small, independently assignable software-factory tasks. The MVP is implemented in the starter project; each next item can be developed and reviewed separately. Keep the application dependency-free and preserve its keyboard-accessible, responsive behavior.

## Now — MVP foundation (implemented)

- Node.js static server and responsive board UI.
- Create, edit, and delete plain-text notes.
- Persist notes in browser local storage; empty state and note count.
- Basic unit tests and product requirements.

## Next — parallel factory tasks

1. **Color labels:** Let a user choose from a small fixed palette for each note. Persist the choice, provide accessible names for color controls, and keep a sensible default for old notes.
2. **Reorder notes:** Allow users to reorder cards, with a keyboard-operable alternative to drag-and-drop. Persist the order and retain it after reload.
3. **Search notes:** Add a search field that filters notes by text without changing or deleting hidden notes. Show a clear no-results state and make the result count understandable.
4. **JSON backup:** Export all notes as a downloadable JSON file and import a validated backup. Invalid data must not replace existing notes; document the backup format and test validation.

## Later — only if the experiment needs it

- Add optional note pinning or archive behavior after validating the need.
- Consider a backend or synchronization only as a separate product decision; do not expand the MVP into accounts or collaboration by default.

## Definition of done for roadmap work

- Acceptance criteria are met and focused tests are added or updated.
- Existing add/edit/delete and persistence flows remain intact.
- Controls are keyboard accessible and have accessible labels.
- Documentation reflects user-visible behavior and limitations.
- No new third-party runtime dependency is introduced without a clear reason.
