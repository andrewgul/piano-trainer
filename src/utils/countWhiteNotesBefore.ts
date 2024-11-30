import { NOTES } from '@config/music';

export const countWhiteNotesBefore = (incomingNote: string) => {
  let result = 0;

  for (const note of NOTES) {
    if (note === incomingNote) {
      return result;
    }

    if (!note.endsWith('#')) {
      result += 1;
    }
  }

  return result;
}