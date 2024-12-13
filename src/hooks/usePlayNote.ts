import { Note, NOTE_PLAYING_DURATION, NoteWithOctave } from '@config/music';
import * as React from 'react';

export const usePlayNote = () => {
  const [playingNote, setCurrentlyPlayingNote] =
    React.useState<NoteWithOctave | null>(null);

  const play = React.useCallback(
    (note: Note | NoteWithOctave) => {
      if (playingNote) {
        return;
      }

      setCurrentlyPlayingNote(
        typeof note === 'string'
          ? {
              note,
              octave: 4,
            }
          : note,
      );

      setTimeout(() => {
        setCurrentlyPlayingNote(null);
      }, NOTE_PLAYING_DURATION);
    },
    [playingNote],
  );

  return { play, playingNote };
};
