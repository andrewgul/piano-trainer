import {
  ChordInScale,
  CHORDS_NUMERATION,
  Note,
  Scale,
  SCALE_CHORD_PATTERN_MAP,
  ScaleChordPattern,
} from '@config/music';

import { getNotesInScale } from './getNotesInScale';

const getChordNumerationDisplay = (
  romanNum: string,
  index: number,
  chordPattern: ScaleChordPattern,
) => {
  switch (chordPattern[index]) {
    case 'min':
      return romanNum.toLowerCase();
    case 'maj':
      return romanNum.toUpperCase();
    case 'dim':
      return romanNum.toLowerCase() + '°';
  }
};

export const getChordsInScale = (
  rootNote: Note,
  scale: Scale,
): ChordInScale[] => {
  const chordPattern = SCALE_CHORD_PATTERN_MAP[scale];
  const notesInScale = getNotesInScale(rootNote, scale);

  return CHORDS_NUMERATION.map((num, index) => ({
    romanNumeration: getChordNumerationDisplay(num, index, chordPattern),
    note: notesInScale[index],
    chord: chordPattern[index],
  }));
};
