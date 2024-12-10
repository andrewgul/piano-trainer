import {
  Note,
  NOTE_PLAYING_DURATION,
  NoteWithOctave,
  Scale,
} from '@config/music';
import { getNotesInScale } from '@utils/getNotesInScale';
import * as React from 'react';

/**
 * @todo make customizable
 */
const OCTAVE = 4;

type Params = {
  note: Note | null;
  scale: Scale | null;
};

export const usePlayScale = ({ note, scale }: Params) => {
  const notesWithOctaveInScale = React.useMemo<NoteWithOctave[]>(() => {
    if (note && scale) {
      const notes = getNotesInScale(note, scale, true, OCTAVE);

      return [
        ...notes,
        {
          note,
          octave: OCTAVE + 1,
        },
      ];
    }

    return [];
  }, [note, scale]);

  const [playingNote, setCurrentlyPlayingNote] =
    React.useState<NoteWithOctave | null>(null);

  const proceed = React.useCallback(
    (notes: NoteWithOctave[]) => {
      if (playingNote) {
        return;
      }

      notes.forEach((note, index) => {
        setTimeout(
          () => {
            setCurrentlyPlayingNote(note);

            if (notes.indexOf(note) + 1 === notes.length) {
              setTimeout(() => {
                setCurrentlyPlayingNote(null);
              }, 10);
            }
          },
          NOTE_PLAYING_DURATION * 1000 * index,
        );
      });
    },
    [playingNote],
  );

  const play = React.useCallback(() => {
    proceed(notesWithOctaveInScale);
  }, [notesWithOctaveInScale, proceed]);

  return { playingNote, play, playing: Boolean(playingNote) };
};
