import { Notation } from "./types/Notation";
import * as React from 'react';

type AppContextValue = {
  notation: Notation;
  setNotation: (value: Notation) => void;
  switchNotation: (callback: (newValue: Notation) => void) => void;
}

type AppContextValueOmittedSetters = Omit<AppContextValue, 'setNotation' | 'switchNotation'>

export const AppContext = React.createContext<AppContextValue | null>(null);

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error('Out of App context');
  }

  return context;
}

export const useCreateAppContext = ({ notation: defaultNotation }: Partial<AppContextValueOmittedSetters> = {}): AppContextValue => {
  const [notation, setNotation] = React.useState<Notation>(defaultNotation ?? 'letter');

  const switchNotation = React.useCallback((onChange?: (newNotation: Notation) => void) => {
    setNotation(prevNotation => {
      const newNotation = prevNotation === 'letter' ? 'solfedge' : 'letter'
      onChange?.(newNotation);

      return newNotation;
    });
  }, []);

  return {
    notation,
    setNotation,
    switchNotation,
  }
};