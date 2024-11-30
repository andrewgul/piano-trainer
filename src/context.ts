import { Notation } from "./types/Notation";
import * as React from 'react';

type AppContextValue = {
  notation: Notation;
  setNotation: (value: Notation) => void;
  switchNotation: VoidFunction;
}

export const AppContext = React.createContext<AppContextValue | null>(null);

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error('Out of App context');
  }

  return context;
}

export const useCreateAppContext = (): AppContextValue => {
  const [notation, setNotation] = React.useState<Notation>('letter');

  const switchNotation = React.useCallback(() => {
    setNotation(prev => prev === 'letter' ? 'solfedge' : 'letter');
  }, []);

  return {
    notation,
    setNotation,
    switchNotation,
  }
};