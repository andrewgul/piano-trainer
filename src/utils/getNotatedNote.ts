import { Note, NOTES_SOLFEGE_NOTATION_MAP } from "../config/music";
import { Notation } from "../types/Notation";

export const getNotatedNote = (note: Note, notation: Notation) => {
  if (notation === 'letter') {
    return note;
  }

  return NOTES_SOLFEGE_NOTATION_MAP[note];
};