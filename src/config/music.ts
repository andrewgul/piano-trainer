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

export type Note = (typeof NOTES)[number];

/**
 * whole, half, whole, whole, half, whole, whole
 */
export const MINOR_SCALE = [true, false, true, true, false, true, false, true, true, false, true, false];

/**
 * whole, 
 */
export const MAJOR_SCALE = []