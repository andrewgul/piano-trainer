import { Note, NOTES, Scale, SCALES_MAP } from '../config/music';

export const getNotesInScale = (rootNote: Note, scale: Scale) => {
  const indexOfRootNote = NOTES.indexOf(rootNote);
  const rightArray = NOTES.slice(indexOfRootNote);
  const leftArray = NOTES.slice(0, indexOfRootNote);
  const finalArray = [...rightArray, ...leftArray];
  const scaleArray = SCALES_MAP[scale];

  return finalArray.filter((_, index) => scaleArray[index]);
};