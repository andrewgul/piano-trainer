import * as React from 'react';
import { Demo } from './components/Demo';
import './main.scss';
import { AppContext, useCreateAppContext } from './context';

export const App = (): React.ReactElement => {
  const context = useCreateAppContext();

  return (
    <AppContext.Provider value={context}>
      <Demo />
    </AppContext.Provider>
  )
};
