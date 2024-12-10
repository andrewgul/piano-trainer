import { Note, NOTES, NOTES_SOLFEGE_NOTATION_MAP } from "@config/music";

import { AlteredNotes } from "@/typings/AlteredNotes";
import { Notation } from "@/typings/Notation";

export const getNotatedNote = (note: Note, notation: Notation) => {
  if (notation === 'letter') {
    return note.replace('#', '♯');
  }

  return NOTES_SOLFEGE_NOTATION_MAP[note];
};

/**
 * @todo fix both displayed notes
 */
export const getDisplayedNote = ( note: Note, notation: Notation, alteredNotes: AlteredNotes) => {
  if (!note.endsWith('#')) {
    return getNotatedNote(note, notation);
  }

  if (alteredNotes === '#') {
    return getNotatedNote(note, notation);
  }

  const alteredNoteIndex = NOTES.indexOf(note);
  const nextNaturalNoteIndex = alteredNoteIndex + 1;
  const alteredNoteAlternativeValue = `${getNotatedNote(NOTES[nextNaturalNoteIndex], notation)}♭`

  if (alteredNotes === 'b') {
    return alteredNoteAlternativeValue;
  }

  return `${note} / ${alteredNoteAlternativeValue}`
};