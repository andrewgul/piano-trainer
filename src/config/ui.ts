import { AlteredNotes } from '@/typings/AlteredNotes';
import { Notation } from '@/typings/Notation';

const NOTATION_DISPLAY: Record<Notation, string> = {
  letter: 'Letter (C, D, E...)',
  solfedge: 'Solfedge: (Do, Re, Mi...)',
};

const ALTERED_NOTES_DISPLAY: Record<AlteredNotes, string> = {
  '#': 'Sharps (♯)',
  b: 'Flats (♭)',
  both: 'Both (♯, ♭)',
};

export const getNotationDisplay = (notation: Notation): string =>
  NOTATION_DISPLAY[notation];

export const getAlteredNotesDisplay = (alteredNotes: AlteredNotes): string =>
  ALTERED_NOTES_DISPLAY[alteredNotes];
