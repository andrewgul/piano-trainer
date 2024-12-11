import { BasicChord } from '@typings/BasicChord';

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

export type NoteWithOctave = { note: Note; octave: number };

export type KeyColor = 'black' | 'white';

export const SCALES = ['major', 'minor'] as const;

export type Scale = (typeof SCALES)[number];

type ScaleArray = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];

/**
 * whole, half, whole, whole, half, whole, whole
 */
export const MINOR_SCALE: ScaleArray = [
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
];

/**
 * whole, whole, half, whole, whole, whole, half
 */
export const MAJOR_SCALE: ScaleArray = [
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
];

export const SCALES_MAP: Record<Scale, ScaleArray> = {
  major: MAJOR_SCALE,
  minor: MINOR_SCALE,
};

export const NOTE_PLAYING_DURATION = 0.25;

export type ScaleChordPattern = [
  BasicChord,
  BasicChord,
  BasicChord,
  BasicChord,
  BasicChord,
  BasicChord,
  BasicChord,
];

export const CHORDS_NUMERATION = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii'];

export const MAJOR_SCALE_CHORD_PATTERN: ScaleChordPattern = [
  'maj',
  'min',
  'min',
  'maj',
  'maj',
  'min',
  'dim',
];

export const MINOR_SCALE_CHORD_PATTERN: ScaleChordPattern = [
  'min',
  'dim',
  'maj',
  'min',
  'min',
  'maj',
  'maj',
];

export const SCALE_CHORD_PATTERN_MAP: Record<Scale, ScaleChordPattern> = {
  minor: MINOR_SCALE_CHORD_PATTERN,
  major: MAJOR_SCALE_CHORD_PATTERN,
};

export type ChordInScale = {
  note: Note;
  chord: BasicChord;
  romanNumeration: string;
};
