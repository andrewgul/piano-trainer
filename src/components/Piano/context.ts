import { AlteredNotes } from '@types/AlteredNotes';
import { Notation } from '@types/Notation';
import * as React from 'react';

type PianoContextValue = {
  notation: Notation;
  alteredNotes: AlteredNotes;
};

export const PianoContext = React.createContext<PianoContextValue>({ notation: 'letter', alteredNotes: '#' });

export const usePianoContext = () => {
  const context = React.useContext(PianoContext);

  if (!context) {
    throw new Error('Out of PianoContext');
  }

  return context;
};