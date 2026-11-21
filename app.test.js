import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createNote, readNotes, writeNotes, STORAGE_KEY } from './notes.js';

test('createNote trims text and timestamps the note', () => {
  const now = new Date('2026-01-02T03:04:05.000Z');
  const note = createNote('  Buy oat milk  ', now);
  assert.equal(typeof note.id, 'string');
  assert.ok(note.id.length > 0);
  assert.equal(note.text, 'Buy oat milk');
  assert.equal(note.updatedAt, now.toISOString());
});

test('createNote rejects blank text', () => {
  assert.equal(createNote('   '), null);
});

test('notes round-trip through storage and malformed data is ignored', () => {
  const values = new Map();
  const storage = {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
  const notes = [{ id: 'one', text: 'Hello', updatedAt: '2026-01-01T00:00:00.000Z' }];
  writeNotes(notes, storage);
  assert.equal(values.has(STORAGE_KEY), true);
  assert.deepEqual(readNotes(storage), notes);
  values.set(STORAGE_KEY, '{bad json');
  assert.deepEqual(readNotes(storage), []);
});
