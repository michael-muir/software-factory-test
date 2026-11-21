export const STORAGE_KEY = 'software-factory-test-notes';

export function createNote(text, now = new Date()) {
  const trimmed = text.trim();
  if (!trimmed) return null;
  return { id: globalThis.crypto?.randomUUID?.() ?? `${now.getTime()}-${Math.random()}`, text: trimmed, updatedAt: now.toISOString() };
}

export function readNotes(storage = globalThis.localStorage) {
  try {
    const notes = JSON.parse(storage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(notes) ? notes.filter(note => note && typeof note.id === 'string' && typeof note.text === 'string') : [];
  } catch {
    return [];
  }
}

export function writeNotes(notes, storage = globalThis.localStorage) {
  storage.setItem(STORAGE_KEY, JSON.stringify(notes));
}
