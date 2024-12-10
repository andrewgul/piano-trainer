import * as React from 'react';
import { NoteWithOctave } from '@config/music';

import { AlteredNotes } from '@/typings/AlteredNotes';
import { Notation } from '@/typings/Notation';

type PianoContextValue = {
  notation: Notation;
  alteredNotes: AlteredNotes;
  playingNote?: NoteWithOctave | null;
};

export const PianoContext = React.createContext<PianoContextValue>({
  notation: 'letter',
  alteredNotes: '#',
});

export const usePianoContext = () => {
  const context = React.useContext(PianoContext);

  if (!context) {
    throw new Error('Out of PianoContext');
  }

  return context;
};
