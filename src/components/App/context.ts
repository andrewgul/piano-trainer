import * as React from 'react';

import { Notation } from '@/typings/Notation';
import { AlteredNotes } from '@/typings/AlteredNotes';

type SwitchFunction<V> = (callback: (newValue: V) => void) => void;

type AppContextValue = {
  notation: Notation;
  setNotation: (value: Notation) => void;
  switchNotation: SwitchFunction<Notation>;
  alteredNotes: AlteredNotes;
  setAlteredNotes: (value: AlteredNotes) => void;
  switchAlteredNotes: SwitchFunction<AlteredNotes>;
};

type AppContextValueOmittedSetters = Omit<
  AppContextValue,
  'setNotation' | 'switchNotation'
>;

export const AppContext = React.createContext<AppContextValue | null>(null);

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error('Out of App context');
  }

  return context;
};

export const useCreateAppContext = ({
  notation: defaultNotation,
}: Partial<AppContextValueOmittedSetters> = {}): AppContextValue => {
  const [notation, setNotation] = React.useState<Notation>(
    defaultNotation ?? 'letter',
  );
  const [alteredNotes, setAlteredNotes] = React.useState<AlteredNotes>('#');

  const switchNotation = React.useCallback(
    (onChange?: (newNotation: Notation) => void) => {
      setNotation((prevNotation) => {
        const newNotation = prevNotation === 'letter' ? 'solfedge' : 'letter';
        onChange?.(newNotation);

        return newNotation;
      });
    },
    [],
  );

  const switchAlteredNotes = React.useCallback(
    (onChange?: (newAlteredNotes: AlteredNotes) => void) => {
      setAlteredNotes((prevAlteredNotes) => {
        const newAlteredNotes: AlteredNotes =
          prevAlteredNotes === '#'
            ? 'b'
            : prevAlteredNotes === 'b'
              ? 'both'
              : '#';
        onChange?.(newAlteredNotes);

        return newAlteredNotes;
      });
    },
    [],
  );

  return {
    notation,
    setNotation,
    switchNotation,
    alteredNotes,
    setAlteredNotes,
    switchAlteredNotes,
  };
};
