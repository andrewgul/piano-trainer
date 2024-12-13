import * as React from 'react';
import { AlteredNotesDisplay } from '@typings/AlteredNotesDisplay';

import { Notation } from '@/typings/Notation';

type LocalStorageData = {
  notation: Notation;
  'altered-notes': AlteredNotesDisplay;
};

type LocalStorageKeys = keyof LocalStorageData;

const LOCAL_STORAGE_DEFAULT_VALUE: LocalStorageData = {
  notation: 'letter',
  'altered-notes': '#',
};

export const useLocalStorage = () => {
  const getValue = React.useCallback(
    <K extends LocalStorageKeys>(
      key: LocalStorageKeys,
    ): LocalStorageData[K] => {
      return (window.localStorage.getItem(key) ||
        LOCAL_STORAGE_DEFAULT_VALUE[key]) as LocalStorageData[K];
    },
    [],
  );

  const setValue = React.useCallback(
    <K extends LocalStorageKeys>(key: K, value: LocalStorageData[K]) => {
      window.localStorage.setItem(key, value);
    },
    [],
  );

  return { getValue, setValue };
};
