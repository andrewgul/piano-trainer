import { useAppContext } from '@components/App/context';
import { Note } from '@config/music';
import { getDisplayedNote as getDisplayedNoteBase } from '@utils/getDisplayedNote';
import * as React from 'react';

export const useDisplayNote = () => {
  const { notation, alteredNotes } = useAppContext();

  const getDisplayedNote = React.useCallback(
    (note: Note) => {
      return getDisplayedNoteBase(note, {
        notation,
        alteredNotes,
      });
    },
    [notation, alteredNotes],
  );

  return { getDisplayedNote, notation, alteredNotes };
};
