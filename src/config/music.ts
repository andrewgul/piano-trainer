export const NOTES = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
] as const;

/**
 * @todo make flexible
 */
export const NOTES_SOLFEGE_NOTATION_MAP: Record<Note, string> = {
  C: 'Do',
  'C#': 'Do#',
  D: 'Re',
  'D#': 'Re#',
  E: 'Mi',
  F: 'Fa',
  'F#': 'Fa#',
  G: 'Sol',
  'G#': 'Sol#',
  A: 'La',
  'A#': 'La#',
  B: 'Ti',
};

export type Note = (typeof NOTES)[number];

export type KeyColor = 'black' | 'white';

/**
 * whole, half, whole, whole, half, whole, whole
 */
export const MINOR_SCALE = [true, false, true, true, false, true, false, true, true, false, true, false];

/**
 * whole, 
 */
export const MAJOR_SCALE = []