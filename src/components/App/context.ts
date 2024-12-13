import * as React from 'react';
import { AlteredNotesDisplay } from '@typings/AlteredNotesDisplay';

import { Notation } from '@/typings/Notation';

type SwitchFunction<V> = (callback: (newValue: V) => void) => void;

type AppContextValue = {
  notation: Notation;
  setNotation: (value: Notation) => void;
  switchNotation: SwitchFunction<Notation>;
  alteredNotes: AlteredNotesDisplay;
  setAlteredNotes: (value: AlteredNotesDisplay) => void;
  switchAlteredNotes: SwitchFunction<AlteredNotesDisplay>;
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
  const [alteredNotes, setAlteredNotes] =
    React.useState<AlteredNotesDisplay>('#');

  const switchNotation = React.useCallback(
    (onChange?: (newNotation: Notation) => void) => {
      setNotation((prevNotation) => {
        const newNotation = prevNotation === 'letter' ? 'solfege' : 'letter';
        onChange?.(newNotation);

        return newNotation;
      });
    },
    [],
  );

  const switchAlteredNotes = React.useCallback(
    (onChange?: (newAlteredNotes: AlteredNotesDisplay) => void) => {
      setAlteredNotes((prevAlteredNotes) => {
        const newAlteredNotes: AlteredNotesDisplay =
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
