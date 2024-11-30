import * as React from 'react';

type PianoContextValue = {
  notation: 'letter' | 'solfedge';
};

export const PianoContext = React.createContext<PianoContextValue>({ notation: 'letter' });

export const usePianoContext = () => {
  const context = React.useContext(PianoContext);

  if (!context) {
    throw new Error('Out of PianoContext');
  }

  return context;
};