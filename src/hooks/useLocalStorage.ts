import { Notation } from "../types/Notation";
import * as React from 'react';

type LocalStorageData = {
  notation: Notation;
};

type LocalStorageKeys = keyof LocalStorageData;

const LOCAL_STORAGE_DEFAULT_VALUE: LocalStorageData = {
  notation: 'letter',
};

export const useLocalStorage = () => {
  const getValue = React.useCallback(<K extends LocalStorageKeys>(key: LocalStorageKeys) => {
    return (window.localStorage.getItem(key) || LOCAL_STORAGE_DEFAULT_VALUE[key]) as LocalStorageData[K];
  }, []);

  const setValue = React.useCallback(<K extends LocalStorageKeys>(key: K, value: LocalStorageData[K]) => {
    window.localStorage.setItem(key, value);
  }, []);

  return { getValue, setValue };
};