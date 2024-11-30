import * as React from 'react';
import { Demo } from './pages/Demo';
import './main.scss';
import { AppContext, useCreateAppContext } from './context';
import { useLocalStorage } from './hooks/useLocalStorage';

export const App = (): React.ReactElement => {
  const { getValue: getLocalStorageValue } = useLocalStorage();

  const context = useCreateAppContext({
    notation: getLocalStorageValue('notation')
  });

  return (
    <AppContext.Provider value={context}>
      <Demo />
    </AppContext.Provider>
  )
};
