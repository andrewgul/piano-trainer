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

export const NATURAL_NOTES = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B',
] as const satisfies Note[];

export const ALTERED_NOTES = [
  'C#',
  'D#',
  'F#',
  'G#',
  'A#',
] as const satisfies Note[];

export type NaturalNote = (typeof NATURAL_NOTES)[number];

export type AlteredNote = (typeof ALTERED_NOTES)[number];

export type Note = (typeof NOTES)[number];

type SolfegeNaturalNote = 'Do' | 'Re' | 'Mi' | 'Fa' | 'Sol' | 'La' | 'Ti';

export const isNaturalNote = (note: Note): note is NaturalNote =>
  // @ts-expect-error usual "includes" type error
  NATURAL_NOTES.includes(note);

export const isAlteredNote = (note: Note): note is NaturalNote =>
  // @ts-expect-error usual "includes" type error
  ALTERED_NOTES.includes(note);

type NotationDisplayConfig = {
  solfege: SolfegeNaturalNote;
  letter: NaturalNote;
};

type NoteDisplayConfig = Record<NaturalNote, NotationDisplayConfig> &
  Record<AlteredNote, Record<'#' | 'b', NotationDisplayConfig>>;

export const NOTE_DISPLAY_CONFIG: NoteDisplayConfig = {
  C: {
    solfege: 'Do',
    letter: 'C',
  },
  get 'C#'() {
    return {
      '#': this.C,
      b: this.D,
    };
  },
  D: {
    letter: 'D',
    solfege: 'Re',
  },
  get 'D#'() {
    return {
      '#': this.D,
      b: this.E,
    };
  },
  E: {
    solfege: 'Mi',
    letter: 'E',
  },
  F: {
    solfege: 'Fa',
    letter: 'F',
  },
  get 'F#'() {
    return {
      '#': this.F,
      b: this.G,
    };
  },
  G: {
    letter: 'G',
    solfege: 'Sol',
  },
  get 'G#'() {
    return {
      '#': this.G,
      b: this.A,
    };
  },
  A: {
    letter: 'A',
    solfege: 'La',
  },
  get 'A#'() {
    return {
      '#': this.A,
      b: this.B,
    };
  },
  B: {
    letter: 'B',
    solfege: 'Ti',
  },
};

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

export const CHORD_ROLE = [
  'Tonic',
  'Supertonic',
  'Mediant',
  'Subdominant',
  'Dominant',
  'Submediant',
  'Subtonic',
] as const;

export type ChordRole = (typeof CHORD_ROLE)[number];

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

export type Chord = {
  note: Note;
  chord: BasicChord;
};

export type ChordInScale = Chord & {
  romanNumeration: string;
  role: ChordRole;
};
