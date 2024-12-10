import { Note, NOTES, NoteWithOctave, Scale, SCALES_MAP } from "@config/music";

export const getNotesInScale = <WO extends boolean = false>(
  rootNote: Note,
  scale: Scale,
  withOctave: WO = false as WO,
  startOctave = 4
): WO extends true ? NoteWithOctave[] : Note[] => {
  const indexOfRootNote = NOTES.indexOf(rootNote);
  const rightArray = NOTES.slice(indexOfRootNote);
  const leftArray = NOTES.slice(0, indexOfRootNote);
  const finalArray = withOctave
    ? [
        ...rightArray.map((note) => ({ note, octave: startOctave })),
        ...leftArray.map((note) => ({ note, octave: startOctave + 1 })),
      ]
    : [...rightArray, ...leftArray];
  const scaleArray = SCALES_MAP[scale];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return finalArray.filter((_, index) => scaleArray[index]) as any;
};
