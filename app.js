import { createNote, readNotes, writeNotes } from './notes.js';

const board = document.querySelector('#board');
const form = document.querySelector('#note-form');
const input = document.querySelector('#new-note');
const emptyState = document.querySelector('#empty-state');
const count = document.querySelector('#note-count');
let notes = readNotes();

function render() {
  board.replaceChildren();
  emptyState.hidden = notes.length > 0;
  count.textContent = `${notes.length} ${notes.length === 1 ? 'note' : 'notes'}`;

  for (const note of notes) {
    const card = document.createElement('article');
    card.className = 'note-card';
    const label = document.createElement('label');
    label.className = 'visually-hidden';
    label.htmlFor = `note-${note.id}`;
    label.textContent = 'Edit note';
    const editor = document.createElement('textarea');
    editor.id = `note-${note.id}`;
    editor.maxLength = 280;
    editor.value = note.text;
    editor.addEventListener('input', () => {
      note.text = editor.value;
      note.updatedAt = new Date().toISOString();
      writeNotes(notes);
    });
    const remove = document.createElement('button');
    remove.className = 'delete-button';
    remove.type = 'button';
    remove.setAttribute('aria-label', 'Delete note');
    remove.textContent = '×';
    remove.addEventListener('click', () => {
      notes = notes.filter(item => item.id !== note.id);
      writeNotes(notes);
      render();
    });
    card.append(label, editor, remove);
    board.append(card);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const note = createNote(input.value);
  if (!note) return;
  notes.unshift(note);
  writeNotes(notes);
  input.value = '';
  render();
  input.focus();
});

render();
