import { Note, NOTES } from '@config/music';
import { BasicChord } from '@typings/BasicChord';

/**
 * @todo naming?
 */
const STEPS: Record<BasicChord, { toSecond: number; toThird: number }> = {
  maj: { toSecond: 4, toThird: 3 },
  min: { toSecond: 3, toThird: 4 },
  dim: { toSecond: 3, toThird: 3 },
};

const TWO_OCTAVES = [...NOTES, ...NOTES];

export const getNotesInChord = (note: Note, chord: BasicChord): Note[] => {
  const steps = STEPS[chord];

  const indexOfRootNote = TWO_OCTAVES.indexOf(note);
  const indexOfSecondNote = indexOfRootNote + steps.toSecond;
  const indexOfThirdNote = indexOfSecondNote + steps.toThird;

  return [note, TWO_OCTAVES[indexOfSecondNote], TWO_OCTAVES[indexOfThirdNote]];
};
